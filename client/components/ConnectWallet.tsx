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
import { injected, fetcher } from "utils";
import { useEffect } from "react";
import { formatEther } from "@ethersproject/units";
import useSWR from "swr";

const ConnectWallet = () => {
  const { active, account, activate, deactivate, library } = useWeb3React();
  const { data: balance, error } = useSWR(["getBalance", account, "latest"], {
    fetcher: fetcher(library),
  });
  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", "true");
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", "true");
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  const alletBoxBG = useColorModeValue("white", "gray.600");
  const addressBG = useColorModeValue("gray.400", "gray.800");

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
              bg: alletBoxBG,
              borderRadius: "md",
              p: 2,
              px: 3,
              alignItems: "center",
              fontWeight: "semibold",
            }}
          >
            <Box>
              {balance && parseFloat(formatEther(balance)).toFixed(2)} ETH
            </Box>
            <Box
              sx={{
                bg: addressBG,
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
