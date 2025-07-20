"use client";

import ErrorComponent from "@/app/components/Error/Error";
import { issueFormAction } from "@/lib/issueFormServerAction";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React, { useActionState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

function page() {
  const [state, formAction, isPending] = useActionState(
    issueFormAction,
    undefined
  );

  return (
    <div className="w-4/6">
      {state?.errorMessage && (
        <ErrorComponent errorMessage={state.errorMessage} />
      )}

      <form action={formAction} className="space-y-4">
        <TextField.Root placeholder="Title" name="title" />
        <TextArea placeholder="Description..." rows={8} name="description" />
        <Button type="submit" disabled={isPending}>
          {isPending ? "loading..." : "Create Issue"}
        </Button>
      </form>
    </div>
  );
}

export default page;
