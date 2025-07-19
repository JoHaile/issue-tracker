import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import ChangeTheme from "@/lib/theme";
import Link from "next/link";
import { Bug } from "lucide-react";

function NavBar() {
  return (
    <Flex p="4" justify="between" className="border-b-1 border-b-gray-500">
      <div className="flex gap-7 items-center">
        <Link href="/">
          <Bug />
        </Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/issues">Issues</Link>
      </div>
      <ChangeTheme />
    </Flex>
  );
}

export default NavBar;
