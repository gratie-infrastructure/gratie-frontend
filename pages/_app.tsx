import '@/styles/globals.css'
import '@/styles/wallet.css'
import '@/styles/form.css'
import '@/styles/landingPage.css'
import '@/styles/company.css'
import '@/styles/formPage.css'

import { ThemeProvider } from '@mui/material/styles';
import localFont from 'next/font/local'
const myFont = localFont({ src: './../fonts/BookAntiquaFont.ttf' })
import theming from '../src/theme.js';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { createTheme } from '@mui/material';
import { ReactNode, useCallback } from 'react';
import { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {goerli,fantomTestnet } from 'wagmi/chains';
import { publicProvider } from '@wagmi/core/providers/public'
import { ChainId, ThirdwebProvider, ThirdwebSDKProvider } from '@thirdweb-dev/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const { chains, publicClient } = configureChains(
  [goerli, fantomTestnet],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'baa6897444ccd99e4d6cd3d3b5c43118',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const theme = createTheme();



function App({ children }: { children: ReactNode }) {
  const { enqueueSnackbar } = useSnackbar();
  const handleWalletError = useCallback(
    (e:any) => {
      enqueueSnackbar(`${e.name}: ${e.message}`, { variant: 'error' });
    },
    [enqueueSnackbar],
  );

  return (
    <main className={myFont.className}>
      <ThemeProvider theme={theming}>
        {children}
      </ThemeProvider>
    </main>
  );
}

function GratieDApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider coolMode theme={darkTheme()} chains={chains}>
    <ThirdwebProvider
    activeChain="mumbai"
  >
    <SnackbarProvider autoHideDuration={10000}>
      <ToastContainer/>
      <App>
        <Component {...pageProps} />
      </App>
      
    </SnackbarProvider>
    </ThirdwebProvider>
    </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default GratieDApp;
