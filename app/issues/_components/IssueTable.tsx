import { IssueStatusBadge } from "@/app/components";
import { Issue, Status } from "@/app/generated/prisma";
import { Table } from "@radix-ui/themes";
import { ArrowUpNarrowWide } from "lucide-react";
import Link from "next/link";

interface Props {
  status: Status;
  orderBy: keyof Issue;
  issues: Issue[];
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
export const issueHeadersCols = issueHeaders.map((header) => header.value);
async function IssueTable({ status, orderBy, issues }: Props) {
  return (
    <>
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
    </>
  );
}

export default IssueTable;
