"use client";

import { AlertDialog, Button, Flex, Text } from "@radix-ui/themes";
import axios from "axios";
import { Delete } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function DeleteIssueButton({ id }: { id: number }) {
  const [error, setError] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  const deleteIssue = async () => {
    try {
      setDeleting(true);
      await axios.delete(`/api/issues/${id}`);
      router.push("/issues");
    } catch (error) {
      setDeleting(false);
      setError(true);
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red" disabled={deleting}>
            <Delete />
            <span className="text-nowrap">
              {deleting ? "Deleting..." : "Delete Issue"}
            </span>
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue ? This action can not be
            undone.
          </AlertDialog.Description>
          <Flex gap="5" mt="5">
            <AlertDialog.Cancel>
              <Button variant="soft" color="blue">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red" onClick={deleteIssue}>
                Delete Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title color="red">Error</AlertDialog.Title>
          <AlertDialog.Description>
            This issue can not be deleted. Please try again later.
          </AlertDialog.Description>
          <div className="mt-4">
            <Button color="blue" variant="soft" onClick={() => setError(false)}>
              Ok
            </Button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
}

export default DeleteIssueButton;
