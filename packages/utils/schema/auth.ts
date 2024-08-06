import { z } from "zod";

export const authenticateUserSchema = z.object({
  walletAddress: z.string().min(1),
  signature: z.string().min(1),
});
