"use client";

import { Status } from "@/app/generated/prisma";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

const statuses: { label: string; value: Status | "null" }[] = [
  { label: "All", value: "null" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

function IssueStatusFilter() {
  const router = useRouter();
  return (
    <Select.Root
      onValueChange={(status) => {
        const query = status === "null" ? "" : `?status=${status}`;
        router.push("/issues" + query);
      }}
    >
      <Select.Trigger placeholder="Filter..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

export default IssueStatusFilter;
