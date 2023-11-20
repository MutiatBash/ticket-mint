// require("dotenv").config()

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  sepolia,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
// import {infuraProvider }from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import {jsonRpcProvider} from 'wagmi/providers/jsonRpc';

const { chains, publicClient } = configureChains(
  [polygon, optimism, arbitrum, base, zora, sepolia],
  [
    alchemyProvider({apiKey:import.meta.env.ALCHEMY_PROVIDER_KEY}),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Ticket Mint',
  projectId: `${import.meta.env.PROJECT_ID}`,
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
