import ChangeTheme from "@/lib/theme";
import { Container, Flex } from "@radix-ui/themes";
import NavLinks from "./NavLinks";
import SignOutButton from "./SignOutButton";
import UserActionsToolBar from "./UserActionsToolBar";

function NavBar() {
  return (
    <Container>
      <Flex
        justify="between"
        align="center"
        className="border-b-1 border-b-gray-500 p-4 mb-8"
      >
        <NavLinks />
        <UserActionsToolBar />
      </Flex>
    </Container>
  );
}

export default NavBar;
