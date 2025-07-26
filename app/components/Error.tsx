import { Callout } from "@radix-ui/themes";
import { Info } from "lucide-react";
import React from "react";

export interface Props {
  message?: string;
  icon?: boolean;
}

function ErrorComponent({ message = "error", icon = false }: Props) {
  return (
    <div className="pb-4 max-[400px]">
      <Callout.Root color="red">
        {icon && (
          <Callout.Icon>
            <Info />
          </Callout.Icon>
        )}
        <Callout.Text>{message}</Callout.Text>
      </Callout.Root>
    </div>
  );
}

export default ErrorComponent;
