"use client";

import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import ChangeTheme from "@/lib/theme";
import Link from "next/link";
import { Bug } from "lucide-react";
import { usePathname } from "next/navigation";

function NavBar() {
  const path = usePathname();

  return (
    <Flex justify="between" className="border-b-1 border-b-gray-500 p-4 mb-8">
      <div className="flex gap-7 items-center">
        <Link href="/">
          <Bug />
        </Link>
        <Link
          href="/dashboard"
          className={path === "/dashboard" ? "text-blue-300" : ""}
        >
          Dashboard
        </Link>
        <Link
          href="/issues"
          className={path === "/issues" ? "text-blue-300" : ""}
        >
          Issues
        </Link>
      </div>
      <ChangeTheme />
    </Flex>
  );
}

export default NavBar;
