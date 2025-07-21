import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

async function issueDetailsPage({ params }: Props) {
  const { id } = params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <ul>
        <li>{issue?.title}</li>
        <li>{issue?.description}</li>
        <li>{issue?.status}</li>
        <li>{issue?.createdAt.toDateString()}</li>
      </ul>
    </div>
  );
}

export default issueDetailsPage;
