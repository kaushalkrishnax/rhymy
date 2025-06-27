import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { ApiResponse } from "@/utils/ApiResponse";
import { ApiError } from "@/utils/ApiError";
import { JWT_SECRET } from "@/utils/tokenHandler";

export async function authMiddleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;

  if (!token) {
    return ApiResponse(401, "Authentication token required");
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET, {
      algorithms: ["HS256"],
    });

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", payload.userId as string);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error: any) {
    if (error.code === "ERR_JWT_EXPIRED") {
      return ApiResponse(401, "Authentication token expired");
    }

    if (error.code === "ERR_JWS_SIGNATURE_VERIFICATION_FAILED") {
      return ApiResponse(401, "Invalid authentication token");
    }

    console.error("JWT verification error:", error);
    return ApiError(error, "Failed to authenticate token");
  }
}
