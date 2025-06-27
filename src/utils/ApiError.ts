import { NextResponse } from "next/server";

/**
 * ApiError for Next.js App Router — returns a 500 JSON response
 */
export function ApiError(
  error: unknown,
  message = "Internal Server Error",
  meta = {},
) {
  const debugPayload = {
    message,
    error: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    meta,
  };

  console.error("[ApiError]", error);

  return NextResponse.json(
    {
      success: false,
      code: 500,
      error: message,
      debug: debugPayload,
    },
    { status: 500 }
  );
}
