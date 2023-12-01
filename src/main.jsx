// require("dotenv").config()

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
	getDefaultWallets,
	RainbowKitProvider,
	midnightTheme,
	darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./Contexts/UserContext.jsx";
import { FormProvider } from "./Contexts/CreateEventContext.jsx";

const { chains, publicClient } = configureChains(
	[sepolia],
	[
		alchemyProvider({
			apiKey: "4P4iJ0eynle-E1mL4tdSYIr4QjjHqkVk",
		}),
		publicProvider(),
	]
);

const { connectors } = getDefaultWallets({
	appName: "Ticket Mint",
	// projectId: `${import.meta.env.VITE_PROJECT_ID}`,
	projectId: "76ec681405433c5c85d659716ea0fd20",
	chains,
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider chains={chains} theme={midnightTheme()}>
				<AppContext>
					<FormProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</FormProvider>
				</AppContext>
			</RainbowKitProvider>
		</WagmiConfig>
	</React.StrictMode>
);
