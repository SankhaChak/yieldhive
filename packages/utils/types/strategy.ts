import { z } from "zod";
import { getStrategyDetailSchema } from "../schema/strategy";

export type GetStrategyDetailPayload = z.infer<typeof getStrategyDetailSchema>;
