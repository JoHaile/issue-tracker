"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@radix-ui/themes";
import { redirect } from "next/navigation";
import React from "react";

function SignOutButton() {
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    const { data } = await authClient.signOut();

    data?.success ? redirect("/log-in") : console.log("Sign out failed");
  };

  return session && <Button onClick={handleSignOut}>Log Out</Button>;
}

export default SignOutButton;
