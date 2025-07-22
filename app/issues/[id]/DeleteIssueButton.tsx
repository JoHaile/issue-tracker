import { AlertDialog, Button, Flex, Text } from "@radix-ui/themes";
import { Delete } from "lucide-react";
import React from "react";

function DeleteIssueButton({ id }: { id: number }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">
          <Delete />
          <span className="text-nowrap">Delete Issue</span>
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this issue ? This action can not be
          undone.
        </AlertDialog.Description>
        <Flex gap="5">
          <AlertDialog.Cancel>
            <Button variant="soft" color="blue">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red" onClick={() => }>Delete Issue</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

export default DeleteIssueButton;
