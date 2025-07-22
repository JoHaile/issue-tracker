import { Button } from "@radix-ui/themes";
import { Edit } from "lucide-react";
import Link from "next/link";
import React from "react";

function EditIssueButton({ id }: { id: number }) {
  return (
    <Button>
      <Link href={`/issues/${id}/edit`} className="cursor-pointer flex gap-1.5">
        <Edit size={19} />
        Edit Issue
      </Link>
    </Button>
  );
}

export default EditIssueButton;
