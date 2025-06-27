import { NextResponse } from "next/server";
import { CookieOption } from "next-auth";

type ApiResponseShape<T = any> = {
  success: boolean;
  code: number;
  message: string;
  data: T | null;
};

export type CookieParams = {
  name: string;
  value: string;
  options?: CookieOption["options"];
};

/**
 * Unified API Response builder — returns a JSON response.
 *
 * @param code - HTTP status code (default: 200)
 * @param message - Message to send
 * @param data - Optional payload
 * @param cookies - Optional array of cookies to set
 */
export function ApiResponse<T = any>(
  code: number = 200,
  message: string = "OK",
  data: T | null = null,
  cookies?: CookieParams[]
) {
  const body: ApiResponseShape<T> = {
    success: code < 400,
    code,
    message,
    data,
  };

  const response = NextResponse.json(body, { status: code });

  if (cookies?.length) {
    for (const { name, value, options } of cookies) {
      response.cookies.set(name, value, options);
    }
  }

  return response;
}
