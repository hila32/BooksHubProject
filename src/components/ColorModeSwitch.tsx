import { Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Switch.Root>
      <Switch.HiddenInput />
      <Switch.Control onClick={toggleColorMode} />
    </Switch.Root>
  );
};

export default ColorModeSwitch;
