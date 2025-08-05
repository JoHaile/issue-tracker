import { prisma } from "@/prisma/client";
import { Card, Heading, Table, Text } from "@radix-ui/themes";
import React from "react";
import { IssueStatusBadge } from "../components";
import Link from "next/link";
import UserAvatar from "../components/UserAvatar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function LatestIssue() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });

  return (
    <Card>
      <Heading className="mb-5">Latest Issues</Heading>
      <Table.Root>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <div className="flex justify-between">
                  <div>
                    <Link
                      href={`issues/${issue.id}`}
                      className="block text-blue-400 mb-2"
                    >
                      {issue.title}
                    </Link>
                    <IssueStatusBadge status={issue.status} />
                  </div>
                  {issue.assignedToUserID && (
                    <UserAvatar image={session?.user.image} />
                  )}
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
}

export default LatestIssue;
