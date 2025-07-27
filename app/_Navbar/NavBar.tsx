import ChangeTheme from "@/lib/theme";
import { Flex } from "@radix-ui/themes";
import NavLinks from "./NavLinks";
import SignOutButton from "./SignOutButton";

function NavBar() {
  return (
    <Flex justify="between" className="border-b-1 border-b-gray-500 p-4 mb-8">
      <NavLinks />
      <div className="flex space-x-4">
        <SignOutButton />
        <ChangeTheme />
      </div>
    </Flex>
  );
}

export default NavBar;
