import { prisma } from "@/prisma/client";
import Pagination from "../components/Pagination";
import { Issue, Status } from "../generated/prisma";
import IssueTable, {
  issueHeadersCols as issueHeaders,
} from "./_components/IssueTable";
import IssueToolbar from "./IssueToolbar";

interface Props {
  searchParams: Promise<{ status: Status; orderBy: keyof Issue; page: string }>;
}

async function page({ searchParams }: Props) {
  const { status, orderBy, page } = await searchParams;

  const currentPage = parseInt(page) || 1;
  const itemsPerPage = 10;

  //* validate the searchParams
  const statuses = Object.values(Status);
  const validatedStatus = statuses.includes(status) ? status : undefined;
  const validatedSortOrder = issueHeaders.includes(orderBy)
    ? { [orderBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: {
      status: validatedStatus,
    },
    orderBy: validatedSortOrder,
    skip: (currentPage - 1) * itemsPerPage,
    take: itemsPerPage,
  });

  const TotalIssue = await prisma.issue.count({
    where: {
      status: validatedStatus,
    },
  });

  return (
    <div>
      <IssueToolbar />

      <IssueTable orderBy={orderBy} status={status} issues={issues} />

      <Pagination
        totalItems={TotalIssue}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default page;
