import { Callout } from "@radix-ui/themes";
import { Info } from "lucide-react";
import React from "react";

interface Props {
  errorMessage?: string;
  icon?: boolean;
}

function ErrorComponent({ errorMessage = "error", icon = false }: Props) {
  return (
    <div className="pb-4">
      <Callout.Root color="red">
        {icon && (
          <Callout.Icon>
            <Info />
          </Callout.Icon>
        )}
        <Callout.Text>{errorMessage}</Callout.Text>
      </Callout.Root>
    </div>
  );
}

export default ErrorComponent;
