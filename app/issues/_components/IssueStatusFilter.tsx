"use client";

import { Status } from "@/app/generated/prisma";
import { Select } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const statuses: { label: string; value: Status | "null" }[] = [
  { label: "All", value: "null" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

function IssueStatusFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterStatus = searchParams.get("status");
  const orderBy = searchParams.get("orderBy");

  return (
    <Select.Root
      defaultValue={filterStatus ? filterStatus! : undefined}
      onValueChange={(status) => {
        const params = new URLSearchParams();
        if (status !== "null") params.append("status", status);
        if (orderBy) params.append("orderBy", orderBy);
        const query = params.size ? "?" + params.toString() : "";

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
