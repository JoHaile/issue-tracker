"use client";

import { Bug } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLinks() {
  const path = usePathname();

  return (
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
  );
}

export default NavLinks;
