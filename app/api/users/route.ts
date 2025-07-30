import { auth } from "@/lib/auth";
import { prisma } from "@/prisma/client";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return NextResponse.json({ error: "Unauthorize user!" }, { status: 401 });
  }

  const users = await prisma.user.findMany();

  return NextResponse.json(users, { status: 200 });
}
