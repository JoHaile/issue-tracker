import { Callout } from "@radix-ui/themes";
import { MailPlus } from "lucide-react";
import React from "react";
import { Props } from "./Error";

function SuccessMessage({ message = "success", icon = false }: Props) {
  return (
    <div className="p-4">
      <Callout.Root>
        {icon && (
          <Callout.Icon>
            <MailPlus />
          </Callout.Icon>
        )}
        <Callout.Text>{message}</Callout.Text>
      </Callout.Root>
    </div>
  );
}

export default SuccessMessage;
