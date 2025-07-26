import ChangeTheme from "@/lib/theme";
import { Flex } from "@radix-ui/themes";
import NavLinks from "./NavLinks";

async function NavBar() {
  return (
    <Flex justify="between" className="border-b-1 border-b-gray-500 p-4 mb-8">
      <NavLinks />
      <ChangeTheme />
    </Flex>
  );
}

export default NavBar;
