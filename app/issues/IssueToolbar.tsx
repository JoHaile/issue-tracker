import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function IssueToolbar() {
  return (
    <div className="p-4">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
}

export default IssueToolbar;
