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
import { mainnet, polygon, optimism, arbitrum,polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ChainId, ThirdwebProvider, ThirdwebSDKProvider } from '@thirdweb-dev/react'


const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum,polygonMumbai],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
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
