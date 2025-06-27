import ms, { StringValue } from "ms";
import { SignJWT } from "jose";

export const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export const ACCESS_TOKEN_EXPIRY = process.env
  .ACCESS_TOKEN_EXPIRY! as StringValue;
export const REFRESH_TOKEN_EXPIRY = process.env
  .REFRESH_TOKEN_EXPIRY! as StringValue;

export const generateAccessToken = async (userId: string): Promise<string> => {
  return await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(
      Math.floor(Date.now() / 1000) + ms(ACCESS_TOKEN_EXPIRY) / 1000
    )
    .sign(JWT_SECRET);
};

export const generateRefreshToken = async (userId: string): Promise<string> => {
  return await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(
      Math.floor(Date.now() / 1000) + ms(REFRESH_TOKEN_EXPIRY) / 1000
    )
    .sign(JWT_SECRET);
};
