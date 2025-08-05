import { auth } from "@/lib/auth";
import { Heading } from "@radix-ui/themes";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import LatestIssue from "./LatestIssue";
import IssueSummary from "./IssueSummary";
import { prisma } from "@/prisma/client";
import IssueCharts from "./IssueCharts";

async function dashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/log-in");
  }

  const open = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const closed = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  const inProgress = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });

  return (
    <>
      <Heading className="capitalize mb-5">Welcome {session.user.name}</Heading>
      {/* <IssueSummary closed={closed} inProgress={inProgress} open={open} /> */}
      <IssueCharts closed={closed} inProgress={inProgress} open={open} />
      {/* <LatestIssue /> */}
    </>
  );
}

export default dashboardPage;
