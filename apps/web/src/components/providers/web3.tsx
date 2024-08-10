"use client";

import { AlchemyAccountProvider } from "@alchemy/aa-alchemy/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { ReactNode } from "react";
import { mainnet } from "viem/chains";
import { State, WagmiProvider } from "wagmi";
import { alchemyConfig } from "../../utils/config/alchemy";
import { config, metadata, projectId } from "../../utils/config/wagmi";

const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  defaultChain: mainnet,
  allowUnsupportedChain: false,
});

export default function Web3ModalProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <AlchemyAccountProvider
          config={alchemyConfig}
          queryClient={queryClient}
        >
          {children}
        </AlchemyAccountProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
