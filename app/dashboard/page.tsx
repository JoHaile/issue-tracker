import { auth } from "@/lib/auth";
import { Heading } from "@radix-ui/themes";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import LatestIssue from "./LatestIssue";

async function dashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/log-in");
  }

  return (
    <>
      <Heading className="capitalize"> Welcome {session.user.name}</Heading>
      <LatestIssue />
    </>
  );
}

export default dashboardPage;
