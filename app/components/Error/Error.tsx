import { Callout } from "@radix-ui/themes";
import { Info } from "lucide-react";
import React from "react";

interface Props {
  errorMessage?: string;
}

function ErrorComponent({ errorMessage = "error" }: Props) {
  return (
    <div className="pb-4">
      <Callout.Root color="red">
        <Callout.Icon>
          <Info />
        </Callout.Icon>
        <Callout.Text>{errorMessage}</Callout.Text>
      </Callout.Root>
    </div>
  );
}

export default ErrorComponent;
