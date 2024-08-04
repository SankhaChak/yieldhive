import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  JWT_SECRET: z.string(),
});

const env = envSchema.parse(process.env);

export const ENV = {
  JWT_SECRET: env.JWT_SECRET,
};
