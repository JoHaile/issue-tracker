import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url)); // Todo: redirect them to the sign up page
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
