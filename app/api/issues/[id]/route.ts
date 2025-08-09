import { issueSchema, patchedIssueSchema } from "@/app/validationSchema";
import { auth } from "@/lib/auth";
import { prisma } from "@/prisma/client";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: string };
}
export async function PATCH(request: NextRequest, { params }: Props) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.json(
      { error: "can not find the session" },
      { status: 401 }
    );
  }

  const { id } = await params;
  const body = await request.json();
  const validation = patchedIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  if (body.assignedToUserID) {
    const user = await prisma.user.findUnique({
      where: {
        id: body.assignedToUserID,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "user  not found." }, { status: 400 });
    }
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) return NextResponse.json("Invalid issue. ", { status: 400 });

  const updatedIssue = await prisma.issue.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title: body.title,
      description: body.description,
      assignedToUserID: body.assignedToUserID,
    },
  });

  return NextResponse.json(updatedIssue, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.json(
      { error: "can not find the session" },
      { status: 401 }
    );
  }
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue)
    return NextResponse.json({ error: "invalid issue." }, { status: 404 });

  await prisma.issue.delete({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json({}, { status: 200 });
}
