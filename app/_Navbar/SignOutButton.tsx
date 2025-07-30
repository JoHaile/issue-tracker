"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Skeleton } from "@radix-ui/themes";
import { redirect, useRouter } from "next/navigation";
import React from "react";

function SignOutButton() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    const { data } = await authClient.signOut();

    if (data?.success) {
      router.push("/log-in");
      router.refresh(); // to update the server state
      console.log("Sign out successful");
    } else {
      console.log("Sign out failed");
    }
  };

  return session ? (
    <Button onClick={handleSignOut}>Log Out</Button>
  ) : (
    <Skeleton height="20px" />
  );
}

export default SignOutButton;
