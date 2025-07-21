import { Skeleton } from "@radix-ui/themes";
import React from "react";

function loading() {
  return (
    <div className="w-4/6">
      <form className="space-y-4">
        <Skeleton height="1rem" />
        <Skeleton height="10rem" />

        <Skeleton width="2rem" height="1rem" />
      </form>
    </div>
  );
}

export default loading;
