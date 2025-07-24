"use client";

import { ErrorComponent } from "@/app/components";
import { signUp } from "@/lib/action";
import { AlertDialog, Button, Flex, TextField } from "@radix-ui/themes";
import { Facebook, Github } from "lucide-react";
import { useActionState } from "react";

function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUp, undefined);

  return (
    <>
      {state?.errorMessage && (
        <ErrorComponent errorMessage={state?.errorMessage} icon={true} />
      )}

      <form
        action={formAction}
        className="max-w-lg text-left m-auto space-y-5 "
      >
        <Flex gap="5" justify="center" mt="5">
          <Button variant="soft">
            <Facebook />
            Google
          </Button>
          <Button variant="soft">
            <Github />
            Git Hub
          </Button>
        </Flex>

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
