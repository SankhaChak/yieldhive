import { defineChain } from "viem";

export const baseVMainnet = defineChain({
  id: 84535660,
  name: "Virtual Base Mainnet",
  nativeCurrency: { name: "vEther", symbol: "vETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://virtual.base.rpc.tenderly.co/d424c845-fe2a-4dac-8cdc-8276e0dfed48",
      ],
    },
  },
  blockExplorers: {
    default: {
      name: "Tenderly Explorer",
      url: "https://dashboard.tenderly.co/explorer/vnet/d424c845-fe2a-4dac-8cdc-8276e0dfed48",
    },
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    ensUniversalResolver: {
      address: "0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da",
      blockCreated: 16773775,
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601,
    },
  },
});

export const optimismVMainnet = defineChain({
  id: 1077121,
  name: "Virtual Optimism Mainnet",
  nativeCurrency: { name: "vEther", symbol: "vETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://virtual.optimism.rpc.tenderly.co/30599e9d-e006-4b0e-b05f-eea92270a3d7",
      ],
    },
  },
  blockExplorers: {
    default: {
      name: "Tenderly Explorer",
      url: "https://dashboard.tenderly.co/explorer/vnet/d424c845-fe2a-4dac-8cdc-8276e0dfed48",
    },
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    ensUniversalResolver: {
      address: "0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da",
      blockCreated: 16773775,
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601,
    },
  },
});
