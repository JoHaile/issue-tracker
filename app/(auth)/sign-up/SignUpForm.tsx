"use client";

import { ErrorComponent } from "@/app/components";
import SuccessMessage from "@/app/components/Success";
import { signUp } from "@/lib/action";
import { AlertDialog, Badge, Button, Flex, TextField } from "@radix-ui/themes";
import { Facebook, Github } from "lucide-react";
import { useActionState } from "react";
import SocialAuthOptions from "../SocialAuthOptions";

function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUp, undefined);

  return (
    <>
      <form
        action={formAction}
        className="max-w-lg text-left m-auto space-y-5 "
      >
        <div className="mt-8">
          {/* {state?.errorMessage && (
            <ErrorComponent message={state?.errorMessage} icon={true} />
          )}

          {state?.successMessage && (
            <SuccessMessage message={state.successMessage} icon={true} />
          )} */}
        </div>

        <SocialAuthOptions />

        <label htmlFor="fullname">Full Name</label>
        <TextField.Root
          placeholder="Full Name"
          type="text"
          name="fullname"
          id="fullname"
          required
        />
        <label htmlFor="email">Email</label>
        <TextField.Root
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          required
        />
        <label htmlFor="password">Password</label>
        <TextField.Root
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          required
          min={6}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "loading..." : "Submit"}
        </Button>
      </form>
    </>
  );
}

export default SignUpForm;
