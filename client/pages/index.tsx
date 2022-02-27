import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts);
    }
  };
  return (
    <div>
      <Head>
        <title>lakiswap</title>
        <meta name="description" content="Decentralize exchange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to lakiswap
        </h1>

        <button onClick={connect}>connect</button>
      </main>
    </div>
  );
};

export default Home;
