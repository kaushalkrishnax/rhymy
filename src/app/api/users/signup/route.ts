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

    const result = await db.collection("users").insertOne({
      name: body?.name,
      username: body?.username,
      email: body?.email,
      password: await bcrypt.hash(body?.password, 10),
      refreshTokens: [],
    });

    const accessToken = await generateAccessToken(result.insertedId.toString());
    const refreshToken = await generateRefreshToken(
      result.insertedId.toString()
    );

    await db.collection("users").updateOne(
      { _id: result.insertedId },
      {
        $push: {
          refreshTokens: { $each: [refreshToken] },
        },
      }
    );

    const user = {
      _id: result.insertedId,
      name: body?.name,
      username: body?.username,
      email: body?.email,
    };

    const tokens = {
      accessToken,
      refreshToken,
    };

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

    return ApiResponse(
      201,
      "User created successfully",
      {
        user,
        tokens,
      },
      cookies
    );
  } catch (error: any) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern || {})[0] || "field";
      return ApiResponse(409, `User with this ${field} already exists`, null);
    }

    return ApiError(error, "Failed to create user", {
      path: "/api/users",
      method: "POST",
    });
  }
}
