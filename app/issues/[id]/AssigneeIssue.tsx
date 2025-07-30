import { prisma } from "@/prisma/client";
import { Select } from "@radix-ui/themes";
import React from "react";

async function AssigneeIssue() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign Issue" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Users</Select.Label>
          <Select.Separator />
          {users.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name.toUpperCase()}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

export default AssigneeIssue;
