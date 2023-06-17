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
                  <ConnectButton />
                  </div>
                    {/* {publicKey ? (
                        <div className='top-wallet-section'>
                          <AccountInfo publicKey={publicKey} />
                          <DisconnectButton color="error" variant="outlined">
                            Disconnect
                          </DisconnectButton>
                        </div>
                    ) : (
                      <div className='top-wallet-section'>
                        <ConnectButtonDynamic color="inherit" variant="outlined">
                            Connect
                        </ConnectButtonDynamic>
                      </div>
                    )} */}
                </Toolbar>
            </AppBar>
            {/* <Offset /> */}
        </>
    );
};

export default Home;
