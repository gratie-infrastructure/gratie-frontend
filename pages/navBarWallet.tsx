import React from "react";

import {
  AppBar,
  Box,
  Link,
  Toolbar,
} from "@mui/material";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <AppBar className="navbar">
        <Toolbar>
          <Box sx={{ display: "flex", margin: "auto" }}>
            <Link style={{ display: "flex" }} href="/">
              <img
                width={70}
                height={70}
                alt="logo"
                src="/images/Favicon.png"
                className="logo-icon"
              />
              <img width={105} height={95} alt="logo" src="/images/Logo.png" />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Home;
