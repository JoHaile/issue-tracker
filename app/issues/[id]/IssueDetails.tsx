import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@/app/generated/prisma";
import { Flex, Card, Text } from "@radix-ui/themes";
import { Heading } from "lucide-react";
import React from "react";

function IssueDetails({ issue }: { issue: Issue }) {
  return (
    <>
      <Heading>{issue?.title}</Heading>

      <Flex gap="4" py="3" align="center">
        <IssueStatusBadge status={issue?.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card>{issue?.description}</Card>
    </>
  );
}

export default IssueDetails;
