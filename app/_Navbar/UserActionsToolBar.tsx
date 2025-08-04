import { Avatar, Button, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { User2 } from "lucide-react";
import React from "react";
import SignOutButton from "./SignOutButton";
import ChangeTheme from "@/lib/theme";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import UserAvatar from "../components/UserAvatar";

async function UserActionsToolBar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <Link href="/sign-up">
        <Button variant="soft">Log in</Button>
      </Link>
    );
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <span className="cursor-pointer">
          <UserAvatar image={session.user.image} />
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        {session?.user.email}
        <DropdownMenu.Separator />
        <Flex gap="2" align="center">
          <Text color="gray">Change Theme : </Text>
          <ChangeTheme />
        </Flex>
        <DropdownMenu.Separator />
        <SignOutButton />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default UserActionsToolBar;
