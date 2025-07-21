import { Button } from "@radix-ui/themes";
import { Edit } from "lucide-react";
import Link from "next/link";
import React from "react";

function EditIssueButton({ id }: { id: number }) {
  return (
    <Link href={`/issues/${id}/edit`} className="cursor-pointer">
      <Button>
        <Edit size={19} />
        Edit Issue
      </Button>
    </Link>
  );
}

export default EditIssueButton;
