import Head from "next/head";
import NavBarNFT from "./navBarNFT";

import UserForm from "@/src/components/user/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gratie</title>
        <meta name="description" content="SASS Product" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarNFT />
      <UserForm />
    </>
  );
}
