import { auth } from "@/lib/auth";
import { Flex, Grid, Heading } from "@radix-ui/themes";
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
      <Heading className="capitalize pb-10">
        Welcome {session.user.name}
      </Heading>

      <Grid gap={"5"} columns={{ initial: "1", md: "2" }}>
        <Flex direction="column" gapY={"5"}>
          <IssueSummary closed={closed} inProgress={inProgress} open={open} />
          <IssueCharts closed={closed} inProgress={inProgress} open={open} />
        </Flex>
        <LatestIssue />
      </Grid>
    </>
  );
}

export default dashboardPage;
