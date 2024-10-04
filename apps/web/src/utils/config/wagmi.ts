import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { http } from "viem";
import { mode } from "viem/chains";
import { ENV } from "./env";
import { baseVMainnet, optimismVMainnet } from "./tenderly";

export const projectId = ENV.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

export const metadata = {
  name: "YieldHive",
  description: "Multiply your crypto while you sleep peacefully",
  url: ENV.NEXT_PUBLIC_FRONTEND_URL,
  icons: [],
};

export const chains = [mode, baseVMainnet, optimismVMainnet] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  transports: {
    [mode.id]: http(),
    [baseVMainnet.id]: http(
      "https://virtual.base.rpc.tenderly.co/d424c845-fe2a-4dac-8cdc-8276e0dfed48"
    ),
    [optimismVMainnet.id]: http(
      "https://virtual.optimism.rpc.tenderly.co/30599e9d-e006-4b0e-b05f-eea92270a3d7"
    ),
  },
});
