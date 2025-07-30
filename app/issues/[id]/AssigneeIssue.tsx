"use client";

import { AlertDialog, Select } from "@radix-ui/themes";
import axios, { AxiosError } from "axios";
import { User } from "better-auth";
import React, { useEffect, useState } from "react";
interface Props {
  id: number;
  assignedToUserID: string | null;
}

function AssigneeIssue({ id, assignedToUserID }: Props) {
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

  const handleAssign = (userID: string) => {
    axios
      .patch(`/api/issues/${id}`, {
        assignedToUserID: userID === "null" ? null : userID,
      })
      .catch((error) => {
        // TODO: show a toaster for an error
        alert("Issue can not ne Assigned./n please try again later.");
        console.log(error);
      });
  };

  return (
    <Select.Root
      defaultValue={assignedToUserID ? assignedToUserID : "null"}
      onValueChange={(userID) => handleAssign(userID)}
    >
      <Select.Trigger placeholder="Assign Issue" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Users</Select.Label>
          <Select.Separator />
          <Select.Item value="null">UnAssigned</Select.Item>
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
