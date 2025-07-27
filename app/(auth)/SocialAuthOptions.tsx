"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Flex } from "@radix-ui/themes";
import { Facebook, Github } from "lucide-react";

type providers = "google" | "github" | "apple" | "facebook" | "microsoft";

export const handleSocialAuth = async (provider: providers) => {
  try {
    await authClient.signIn.social({
      provider,
      callbackURL: "/dashboard",
    });
  } catch (error) {
    console.log(error);
  }
};

function SocialAuthOptions() {
  return (
    <Flex gap="5" justify="center" mt="5">
      <Button
        variant="soft"
        type="button"
        onClick={() => handleSocialAuth("google")}
      >
        <Facebook />
        Google
      </Button>

      <Button
        variant="soft"
        type="button"
        onClick={() => handleSocialAuth("github")}
      >
        <Github />
        Git Hub
      </Button>
    </Flex>
  );
}

export default SocialAuthOptions;
