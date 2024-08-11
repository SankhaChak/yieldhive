import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { base, baseSepolia, modeTestnet } from "wagmi/chains";
import { ENV } from "./env";

export const projectId = ENV.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

export const metadata = {
  name: "YieldHive",
  description: "Multiply your crypto while you sleep peacefully",
  url: ENV.NEXT_PUBLIC_FRONTEND_URL,
  icons: [],
};

const tenderlyChain = {
  id: 84535660,
  rpcUrls: {
    default: {
      http: [
        "https://virtual.base.rpc.tenderly.co/d424c845-fe2a-4dac-8cdc-8276e0dfed48",
      ],
    },
  },
  blockExplorers: {
    default: {
      name: "Tenderly",
      url: "https://dashboard.tenderly.co/explorer/vnet/d424c845-fe2a-4dac-8cdc-8276e0dfed48",
    },
  },
};

export const chains = [base, modeTestnet, baseSepolia, tenderlyChain] as const;
export const config = defaultWagmiConfig({
  // @ts-ignore
  chains,
  projectId,
  metadata,
  ssr: true,
});
