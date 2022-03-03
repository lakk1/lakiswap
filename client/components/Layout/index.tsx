import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Navbar";

const RootLayout = (props: { children: any }) => {
  const { children } = props;

  return (
    <Box
      px={{
        base: 4,
        md: 36,
      }}
      height="100vh"
      bg={useColorModeValue("#f2f4f6", "#1c1c21")}
    >
      <Navbar />
      <Box>{children}</Box>{" "}
    </Box>
  );
};

export default RootLayout;
