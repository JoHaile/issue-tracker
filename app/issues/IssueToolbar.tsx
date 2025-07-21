import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function IssueToolbar() {
  return (
    <div className="p-4">
      <Link href="/issues/new">
        <Button>New Issue</Button>
      </Link>
    </div>
  );
}

export default IssueToolbar;
