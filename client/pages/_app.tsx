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

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        {getLayout(<Component {...pageProps} />)}
      </Web3ReactProvider>
    </ChakraProvider>
  );
}
