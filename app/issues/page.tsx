import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import React from "react";
import { IssueStatusBadge } from "../components";
import IssueToolbar from "./IssueToolbar";
import Link from "next/link";
import { Issue, Status } from "../generated/prisma";
import { ArrowUpNarrowWide } from "lucide-react";

interface Props {
  searchParams: Promise<{ status: Status; orderBy: keyof Issue }>;
}

const issueHeaders: {
  label: string;
  value: keyof Issue;
  classname?: string;
}[] = [
  {
    label: "Issue",
    value: "title",
  },
  { label: "Status", value: "status", classname: "hidden sm:table-cell" },
  {
    label: "Created",
    value: "createdAt",
    classname: "hidden sm:table-cell",
  },
];

async function page({ searchParams }: Props) {
  const { status, orderBy } = await searchParams;

  //* validate the searchParams
  const statuses = Object.values(Status);
  const validatedStatus = statuses.includes(status) ? status : undefined;
  const validatedSortOrder = issueHeaders
    .map((headers) => headers.value)
    .includes(orderBy)
    ? { [orderBy]: "asc" }
    : undefined;
  const issues = await prisma.issue.findMany({
    where: {
      status: validatedStatus,
    },
    orderBy: validatedSortOrder,
  });

  return (
    <div>
      <IssueToolbar />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {issueHeaders.map((issue) => (
              <Table.ColumnHeaderCell
                key={issue.value}
                className={issue.classname}
              >
                <Link
                  className="flex gap-2 items-center"
                  href={{
                    query: {
                      status,
                      orderBy: issue.value,
                    },
                  }}
                >
                  {issue.label}
                  {issue.value === orderBy && <ArrowUpNarrowWide size="20px" />}
                </Link>
              </Table.ColumnHeaderCell>
            ))}
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
