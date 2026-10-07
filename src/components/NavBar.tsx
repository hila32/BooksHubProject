import logo from "../assets/Logo_of_Mango_black.svg.png";
import { Center, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="2">
      <Center w={1400}>
        <Image src={logo} w="200px"></Image>
      </Center>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
