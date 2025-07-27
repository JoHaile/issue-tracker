"use client";

import { ErrorComponent } from "@/app/components";
import { login } from "@/lib/action";
import { Button, TextField } from "@radix-ui/themes";
import { useActionState } from "react";
import SocialAuthOptions from "../SocialAuthOptions";

function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, undefined);
  return (
    <form action={formAction} className="max-w-lg text-left m-auto space-y-5 ">
      <div className="mt-8">
        {state?.errorMessage && (
          <ErrorComponent message={state?.errorMessage} icon={true} />
        )}
      </div>

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
        {isPending ? "Loading" : "Submit"}
      </Button>
    </form>
  );
}

export default LoginForm;
