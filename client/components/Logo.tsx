import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { BsFillHexagonFill } from "react-icons/bs";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        color: "newblue.500",
        flex: { base: 1, md: "none" },
      }}
    >
      <BsFillHexagonFill size={24} />
      <Text
        px={2}
        fontWeight={"bold"}
        color={useColorModeValue("newblue.900", "newblue.100")}
        letterSpacing={6}
        display={{ base: "none", md: "inline-flex" }}
      >
        LAKI
      </Text>
    </Box>
  );
};

export default Logo;
