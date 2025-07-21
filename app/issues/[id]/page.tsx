import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
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
    <div className="max-w-4/5">
      <Heading>{issue?.title}</Heading>
      <Flex gap="4" py="3" align="center">
        <IssueStatusBadge status={issue?.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card>{issue?.description}</Card>
    </div>
  );
}

export default issueDetailsPage;
