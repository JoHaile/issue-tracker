import { Heading, Text } from "@radix-ui/themes";
import React from "react";
import SignUpForm from "./SignUpForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function signUpPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) return redirect("/dashboard");

  return (
    <div className="text-center">
      <Heading>Welcome</Heading>
      <Text>Sign Up to Continue</Text>
      <SignUpForm />
    </div>
  );
}

export default signUpPage;
