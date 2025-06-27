import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";

import clientPromise from "@/lib/mongodb";
import { ApiResponse, CookieParams } from "@/utils/ApiResponse";
import { ApiError } from "@/utils/ApiError";
import { generateAccessToken } from "@/utils/tokenHandler";

export async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get("refreshToken")?.value;

    if (!refreshToken) {
      return ApiResponse(401, "Unauthorized", null);
    }

    const client = await clientPromise;
    const db = client.db("users-db");

    const user = await db
      .collection("users")
      .findOne({ refreshTokens: { $in: [refreshToken] } }, { projection: { _id: 1 } });

    if (!user) {
      return ApiResponse(404, "User with this ID not found", null);
    }

    const accessToken = await generateAccessToken(user._id.toString());

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
    ];

    return ApiResponse(
      201,
      "Access token refreshed successfully",
      {
        tokens: {
          accessToken,
        },
      },
      cookies
    );
  } catch (error: any) {
    return ApiError(error, "Failed to refresh access token", {
      path: "/api/auth/refresh_token",
      method: "POST",
    });
  }
}
