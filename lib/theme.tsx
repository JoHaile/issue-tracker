"use client";

import { IconButton } from "@radix-ui/themes";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

function ChangeTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="">
      <IconButton
        className="rounded-xl items-center flex"
        variant="soft"
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        <SunMoon width="100" className="p-0.5 cursor-pointer" />
      </IconButton>
    </div>
  );
}

export default ChangeTheme;
