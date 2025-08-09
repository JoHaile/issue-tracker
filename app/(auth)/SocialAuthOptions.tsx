"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Flex } from "@radix-ui/themes";
import { FaGoogle, FaGithub } from "react-icons/fa";

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
        <FaGoogle />
        Google
      </Button>

      <Button
        variant="soft"
        type="button"
        onClick={() => handleSocialAuth("github")}
      >
        <FaGithub />
        Git Hub
      </Button>
    </Flex>
  );
}

export default SocialAuthOptions;
