import { NextRequest } from "next/server";
import { authMiddleware } from "./middlewares/auth.middleware";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/auth/")) {
    return;
  }

  return authMiddleware(request);
}

export const config = {
  matcher: ["/api/:path*"],
};
