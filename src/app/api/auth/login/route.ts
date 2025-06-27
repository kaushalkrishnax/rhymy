import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";

import clientPromise from "@/lib/mongodb";
import { ApiResponse, CookieParams } from "@/utils/ApiResponse";
import { ApiError } from "@/utils/ApiError";
import {
  generateAccessToken,
  generateRefreshToken,
} from "@/utils/tokenHandler";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("users-db");

    const result = await db.collection("users").findOne({
      $or: [{ email: body?.email }, { username: body?.username }],
    });

    const isPasswordValid = await bcrypt.compare(
      body?.password,
      result?.password
    );

    if (!result || !isPasswordValid) {
      return ApiResponse(404, "Invalid credentials", null);
    }

    const accessToken = await generateAccessToken(result._id.toString());
    const refreshToken = await generateRefreshToken(result._id.toString());

    await db.collection("users").updateOne(
      { _id: result._id },
      {
        $push: {
          refreshTokens: { $each: [refreshToken] },
        },
      }
    );

    const cookies: CookieParams[] = [
      {
        name: "accessToken",
        value: accessToken,
        options: {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 6, // 6 hours,
          path: "/",
          sameSite: "strict",
        },
      },
      {
        name: "refreshToken",
        value: refreshToken,
        options: {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 60, // 60 days,
          path: "/",
          sameSite: "strict",
        },
      },
    ];

    const user = {
      _id: result._id,
      name: result.name,
      username: result.username,
      email: result.email,
    };

    return ApiResponse(
      201,
      "User logged in successfully",
      {
        user,
        tokens: {
          accessToken,
          refreshToken,
        },
      },
      cookies
    );
  } catch (error: any) {
    return ApiError(error, "Failed to log in user", {
      path: "/api/users/login",
      method: "POST",
    });
  }
}
