// TODO: Make seperate client and server env schemas and validate them accordingly
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_BACKEND_ENDPOINT: z.string().url(),
  NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: z.string().min(1),
  NEXT_PUBLIC_FRONTEND_URL: z.string().url(),
  NEXT_PUBLIC_ORG_ID: z.string().min(1),
});

type EnvSchema = z.infer<typeof envSchema>;

function validateEnv(): EnvSchema {
  if (typeof window !== "undefined") {
    const clientEnv = {
      NEXT_PUBLIC_BACKEND_ENDPOINT: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT,
      NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID:
        process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
      NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
      NEXT_PUBLIC_ORG_ID: process.env.NEXT_PUBLIC_ORG_ID,
    };
    return envSchema.parse(clientEnv);
  }

  const serverEnv = {
    NEXT_PUBLIC_BACKEND_ENDPOINT: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT,
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
    NEXT_PUBLIC_ORG_ID: process.env.NEXT_PUBLIC_ORG_ID,
  };
  return envSchema.parse(serverEnv);
}

export const ENV = validateEnv();
