import { Button, Text } from "@radix-ui/themes";
import { Delete } from "lucide-react";
import React from "react";

function DeleteIssueButton({ id }: { id: number }) {
  return (
    <Button color="red" className="whitespace-nowrap">
      <Delete />
      <span className="text-nowrap">Delete Issue</span>
    </Button>
  );
}

export default DeleteIssueButton;
