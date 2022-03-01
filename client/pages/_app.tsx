import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import theme from "../theme";
import { ethers } from "ethers";
import { ReactElement, ReactNode, ComponentType } from "react";
import { NextPage } from "next";

const getLibrary = (provider: any) => {
  return new ethers.providers.Web3Provider(provider);
};

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        {getLayout(<Component {...pageProps} />)}
      </Web3ReactProvider>
    </ChakraProvider>
  );
}

export default MyApp;
