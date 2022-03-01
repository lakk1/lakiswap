import { useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      mx={2}
      onClick={() => {
        toggleColorMode();
      }}
    >
      {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeSwitch;
