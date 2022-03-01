import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useEffect } from "react";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

const ConnectWallet = () => {
  const { active, account, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", true);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  if (active) {
    return (
      <Menu>
        <MenuButton
          as={Box}
          rounded={"full"}
          variant={"solid"}
          cursor={"pointer"}
          minW={0}
          rightIcon={<ChevronDownIcon />}
        >
          <Box
            sx={{
              display: "inline-flex",
              mr: 4,
              bg: useColorModeValue("white", "gray.600"),
              borderRadius: "md",
              p: 2,
              px: 3,
              alignItems: "center",
              fontWeight: "semibold",
            }}
          >
            <Box>1.24 ETH</Box>
            <Box
              bg={useColorModeValue("gray.400", "gray.800")}
              sx={{
                bg: useColorModeValue("gray.400", "gray.800"),
                borderRadius: "md",
                py: 1,
                px: 4,
                ml: 2,
              }}
            >
              {`${account?.slice(0, 6)}...${account?.slice(38)}`}{" "}
              <ChevronDownIcon />
            </Box>
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem>Wallet</MenuItem>
          <MenuItem>Transactions</MenuItem>
          <MenuItem>
            <Button onClick={disconnect} variant="unstyled">
              Disconnect
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
  return (
    <Button variant={"solid"} colorScheme="newblue" mr={4} onClick={connect}>
      <span>Connect Wallet</span>
    </Button>
  );
};

export default ConnectWallet;