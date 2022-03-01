import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    newblue: {
      "50": "#E5F6FF",
      "100": "#B8E5FF",
      "200": "#8AD5FF",
      "300": "#5CC4FF",
      "400": "#2EB4FF",
      "500": "#00A3FF",
      "600": "#0082CC",
      "700": "#006299",
      "800": "#004166",
      "900": "#002133",
    },
  },
});

export default theme;
