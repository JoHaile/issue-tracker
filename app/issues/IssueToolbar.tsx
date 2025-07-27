import { auth } from "@/lib/auth";
import { Button } from "@radix-ui/themes";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function IssueToolbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="p-4">
      {session ? (
        <Link href="/issues/new">
          <Button>New Issue</Button>
        </Link>
      ) : (
        <Link href="/sign-up">
          <Button>New Issue</Button>
        </Link>
      )}
    </div>
  );
}

export default IssueToolbar;
