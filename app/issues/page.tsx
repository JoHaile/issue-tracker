import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import React from "react";
import { IssueStatusBadge } from "../components";
import IssueToolbar from "./IssueToolbar";
import Link from "next/link";

async function page() {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <IssueToolbar />
      <Table.Root variant="surface" className="max-w-5xl">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden sm:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden sm:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link
                  href={`/issues/${issue.id}`}
                  className="link text-blue-400 hover:underline"
                >
                  {issue.title}
                </Link>
                <div className="sm:hidden block py-1 mt-1">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden sm:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden sm:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}

export default page;
