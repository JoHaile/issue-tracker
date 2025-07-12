"use client";

import { Button } from "@radix-ui/themes";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

function ChangeTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="cursor-pointer">
      <Button
        className="rounded-xl items-center flex"
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        <SunMoon />
      </Button>
    </div>
  );
}

export default ChangeTheme;
