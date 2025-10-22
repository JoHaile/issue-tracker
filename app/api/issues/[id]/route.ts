import { patchedIssueSchema } from "@/app/validationSchema";
import { auth } from "@/lib/auth";
import { prisma } from "@/prisma/client";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Define the correct type structure for route parameters
interface RouteContext {
  params: {
    id: string; // Must match the dynamic segment [id]
  };
}

export async function PATCH(
  request: NextRequest,
  { params }: RouteContext // Correctly receive 'params' object via destructuring
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.json(
      { error: "can not find the session" },
      { status: 401 }
    );
  }

  const { id } = params;
  const body = await request.json();
  const validation = patchedIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  // FIXED: Removed 'status' from destructuring, as it does not exist on the validated type.
  const { assignedToUserID, title, description } = validation.data;

  if (assignedToUserID) {
    const user = await prisma.user.findUnique({
      where: {
        id: assignedToUserID,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "user not found." }, { status: 400 });
    }
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) return NextResponse.json("Invalid issue.", { status: 404 }); // Use 404 for resource not found

  const updatedIssue = await prisma.issue.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title,
      description,
      assignedToUserID,
      // FIXED: Removed 'status' from the update data.
    },
  });

  return NextResponse.json(updatedIssue, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteContext // Correctly receive 'params' object via destructuring
) {
  const { id } = params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.json(
      { error: "can not find the session" },
      { status: 401 }
    );
  }

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

  // Conventionally, DELETE returns a 204 No Content status on successful deletion
  return new NextResponse(null, { status: 204 });
}
