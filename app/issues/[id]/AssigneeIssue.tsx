"use client";

import { Select } from "@radix-ui/themes";
import axios from "axios";
import { User } from "better-auth";
import React, { useEffect, useState } from "react";

function AssigneeIssue() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await axios
          .get<User[]>("/api/users")
          .then((res) => res.data);

        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign Issue" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Users</Select.Label>
          <Select.Separator />
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id} className="capitalize">
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

export default AssigneeIssue;
