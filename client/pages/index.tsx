import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import RootLayout from "components/Layout";
import SwapForm from "components/SwapForm";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>lakiswap</title>
        <meta name="description" content="Decentralize exchange" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 8,
        }}
      >
        <SwapForm />
      </Box>
    </div>
  );
}

Home.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;
