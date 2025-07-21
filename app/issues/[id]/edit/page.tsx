import React from "react";
import IssueForm from "../../_components/IssueForm";
import { prisma } from "@/prisma/client";

interface Props {
  params: { id: string };
}

async function editIssuePage({ params }: Props) {
  const { id } = params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return <IssueForm issue={issue} />;
}

export default editIssuePage;
