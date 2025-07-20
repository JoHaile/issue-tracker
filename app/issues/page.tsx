import { Button, Heading } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <Heading>Issue Page</Heading>

      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
}

export default page;
