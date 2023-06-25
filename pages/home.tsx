import * as React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";

import NavBarWallet from "./navBarWallet";

import HomeContent from "@/src/components/home/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gratie</title>
        <meta name="description" content="SASS Product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarWallet />
      
        
          <HomeContent />
        
      
    </>
  );
}
