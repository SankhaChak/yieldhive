import { z } from "zod";

export const addStrategySchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  apy: z.string().min(1),
  multiplier: z.string().min(1),
});
