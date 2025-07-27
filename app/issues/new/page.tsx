import React from "react";
import IssueForm from "../_components/IssueForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function newIssuePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-up");
  }

  return <IssueForm />;
}

export default newIssuePage;
