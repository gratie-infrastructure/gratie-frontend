import React, { useState } from "react";

import AccountInfo from "@/src/components/AccountInfo";

import type { NextPage } from 'next';
import { styled } from '@mui/material/styles';

import dynamic from 'next/dynamic';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { AppBar, Link, Toolbar } from "@mui/material";
import { Box } from "@mui/system";

// const Offset = styled('div')(
//     // @ts-ignore
//     ({ theme }) => theme.mixins.toolbar,
// );

// const ConnectButtonDynamic = dynamic(() => import('@/src/components/ConnectButton'), { ssr: false });

const Home: NextPage = () => {
    // const { publicKey } = useWallet();
    const [memoText, setMemoText] = useState('');
    return (
        <>
              <AppBar className="navbar"> 
                <Toolbar>
                  <Box sx={{ display:'flex', margin:'auto'}}>
                    <Link style={{ display:'flex'}} href='/'>
                      <img width={70} height={70} alt='logo' src='/images/Favicon.png' className='logo-icon'/>
                      <img width={105} height={95} alt='logo' src='/images/Logo.png' />
                    </Link>
                  </Box>
                  <div className='flex w-full justify-end'>
                 
                  </div>
                  <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button
                          onClick={openConnectModal}
                          type="button"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            background: "black",
                            padding: "5px 28px",
                            border: "2px solid #00FF01",
                            borderRadius: "50px",
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginRight: "50px",
                          }}
                        >
                          Connect Wallet
                          <svg
                            width="25"
                            height="26"
                            style={{ marginLeft: "20px", paddingBottom: "3px" }}
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.7143 12.8557V9.42718C20.7143 8.97252 20.5337 8.53648 20.2122 8.21499C19.8907 7.8935 19.4547 7.71289 19 7.71289H2.71429C2.25963 7.71289 1.82359 7.8935 1.5021 8.21499C1.18061 8.53648 1 8.97252 1 9.42718V21.4272C1 21.8818 1.18061 22.3179 1.5021 22.6394C1.82359 22.9609 2.25963 23.1415 2.71429 23.1415H19C19.4547 23.1415 19.8907 22.9609 20.2122 22.6394C20.5337 22.3179 20.7143 21.8818 20.7143 21.4272V17.1415"
                              stroke="#00FF01"
                              stroke-width="1.71429"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6.72571 3.42714L16.4457 0.89C16.5549 0.859226 16.6693 0.850901 16.7818 0.865528C16.8943 0.880155 17.0027 0.917431 17.1004 0.975106C17.1982 1.03278 17.2832 1.10966 17.3504 1.2011C17.4176 1.29254 17.4656 1.39665 17.4914 1.50714L17.9714 3.42714"
                              stroke="#00FF01"
                              stroke-width="1.71429"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M22.4286 12.8557H18.1428C17.6695 12.8557 17.2857 13.2395 17.2857 13.7129V16.2843C17.2857 16.7577 17.6695 17.1414 18.1428 17.1414H22.4286C22.9019 17.1414 23.2857 16.7577 23.2857 16.2843V13.7129C23.2857 13.2395 22.9019 12.8557 22.4286 12.8557Z"
                              stroke="#00FF01"
                              stroke-width="1.71429"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} type="button">
                          Wrong network
                        </button>
                      );
                    }

                    return (
                      <div style={{ display: "flex", gap: 12 }}>
                        <button
                          onClick={openChainModal}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            background: "#233A22",
                            padding: "13px 20px",
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            fontSize: "18px",
                            color: "white",
                            border: "0px",
                            borderRadius: "50px",
                          }}
                          type="button"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 22,
                                height: 22,
                                borderRadius: 999,
                                overflow: "hidden",
                                marginRight: 6,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? "Chain icon"}
                                  src={chain.iconUrl}
                                  style={{ width: 20, height: 20 }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}

                          <svg
                            width="18"
                            height="10"
                            style={{ marginLeft: "8px" }}
                            viewBox="0 0 18 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 1.5L8.59615 8.33169C8.64795 8.38482 8.71051 8.42717 8.77997 8.45611C8.84943 8.48506 8.92431 8.5 9 8.5C9.07569 8.5 9.15057 8.48506 9.22003 8.45611C9.28949 8.42717 9.35205 8.38482 9.40385 8.33169L16.5 1.5"
                              stroke="#00FF01"
                              stroke-width="1.71429"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>

                        <button
                          onClick={openAccountModal}
                          type="button"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            background: "black",
                            padding: "5px 28px",
                            border: "2px solid #00FF01",
                            borderRadius: "50px",
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginRight: "50px",
                          }}
                        >
                          {account.displayName}

                          <svg
                            width="25"
                            height="26"
                            style={{ marginLeft: "20px", paddingBottom: "3px" }}
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.7143 12.8557V9.42718C20.7143 8.97252 20.5337 8.53648 20.2122 8.21499C19.8907 7.8935 19.4547 7.71289 19 7.71289H2.71429C2.25963 7.71289 1.82359 7.8935 1.5021 8.21499C1.18061 8.53648 1 8.97252 1 9.42718V21.4272C1 21.8818 1.18061 22.3179 1.5021 22.6394C1.82359 22.9609 2.25963 23.1415 2.71429 23.1415H19C19.4547 23.1415 19.8907 22.9609 20.2122 22.6394C20.5337 22.3179 20.7143 21.8818 20.7143 21.4272V17.1415"
                              stroke="#00FF01"
                              stroke-width="1.71429"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6.72571 3.42714L16.4457 0.89C16.5549 0.859226 16.6693 0.850901 16.7818 0.865528C16.8943 0.880155 17.0027 0.917431 17.1004 0.975106C17.1982 1.03278 17.2832 1.10966 17.3504 1.2011C17.4176 1.29254 17.4656 1.39665 17.4914 1.50714L17.9714 3.42714"
                              stroke="#00FF01"
                              stroke-width="1.71429"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M22.4286 12.8557H18.1428C17.6695 12.8557 17.2857 13.2395 17.2857 13.7129V16.2843C17.2857 16.7577 17.6695 17.1414 18.1428 17.1414H22.4286C22.9019 17.1414 23.2857 16.7577 23.2857 16.2843V13.7129C23.2857 13.2395 22.9019 12.8557 22.4286 12.8557Z"
                              stroke="#00FF01"
                              stroke-width="1.71429"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
                </Toolbar>
            </AppBar>
            {/* <Offset /> */}
        </>
    );
};

export default Home;
