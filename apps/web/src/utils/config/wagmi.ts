import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { base, baseSepolia, modeTestnet } from "wagmi/chains";
import { ENV } from "./env";

export const projectId = ENV.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

export const metadata = {
  name: "YieldHive",
  description: "Multiply your crypto while you sleep peacefully",
  url: "http://localhost:3000",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [base, modeTestnet, baseSepolia] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
});
