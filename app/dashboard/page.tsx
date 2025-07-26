import { auth } from "@/lib/auth";
import { Heading } from "@radix-ui/themes";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

async function dashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/log-in");
  }

  return (
    <>
      <Heading> Dashboard Page {session.user.name} </Heading>
    </>
  );
}

export default dashboardPage;
