import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

function page() {
  return (
    <div className="w-1/2 space-y-4">
      <TextField.Root placeholder="Title"></TextField.Root>
      <TextArea placeholder="Description..." rows={10} />
      <Button>Create Issue</Button>
    </div>
  );
}

export default page;
