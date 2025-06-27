import { NextRequest } from "next/server";
import { authMiddleware } from "./middlewares/auth.middleware";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const excludedPaths = ["/api/users/login", "/api/users/signup"];
  if (excludedPaths.includes(pathname)) {
    return;
  }

  return authMiddleware(request);
}

export const config = {
  matcher: ["/api/:path*"],
};
