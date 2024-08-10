import { AlchemyGasManagerConfig } from "@alchemy/aa-alchemy";
import {
  SupportedAccountTypes,
  createConfig,
} from "@alchemy/aa-alchemy/config";
import { SmartAccountClientOptsSchema, baseSepolia } from "@alchemy/aa-core";
import { QueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { ENV } from "./env";

export const chain = baseSepolia;
export const alchemyConfig = createConfig({
  rpcUrl: "/api/rpc/chain/" + chain.id,
  signerConnection: {
    rpcUrl: "/api/rpc/",
  },
  chain,
  ssr: true,
});

export const queryClient = new QueryClient();

export const accountType: SupportedAccountTypes = "MultiOwnerModularAccount";

export const gasManagerConfig: AlchemyGasManagerConfig = {
  policyId: ENV.NEXT_PUBLIC_ALCHEMY_GAS_MANAGER_POLICY_ID,
};

type SmartAccountClienOptions = z.infer<typeof SmartAccountClientOptsSchema>;

export const accountClientOptions: Partial<SmartAccountClienOptions> = {
  txMaxRetries: 20,
};
