import { auth } from "@/lib/auth";
import { Button, Flex } from "@radix-ui/themes";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./_components/IssueStatusFilter";

async function IssueToolbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <Flex justify="between" className="p-4 mb-3">
      <IssueStatusFilter />

      <Link href={session ? "/issues/new" : "/sign-up"}>
        <Button>New Issue</Button>
      </Link>
    </Flex>
  );
}

export default IssueToolbar;
