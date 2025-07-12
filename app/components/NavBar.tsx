import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import ChangeTheme from "@/lib/theme";

function NavBar() {
  return (
    <Flex p="4" justify="between">
      <Text>Hello from Radix Themes </Text>
      <ChangeTheme />
    </Flex>
  );
}

export default NavBar;
