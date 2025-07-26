import { Heading, Text } from "@radix-ui/themes";
import React from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function loginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="text-center">
      <Heading>Welcome Back</Heading>
      <Text>Log In to Continue.</Text>
      <LoginForm />

      <div className="space-x-2">
        <span>Don't Have an Account?</span>
        <Link href="/sign-up" className="text-blue-400 hover:underline">
          Sign Up.
        </Link>
      </div>
    </div>
  );
}

export default loginPage;
