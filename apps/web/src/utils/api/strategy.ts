import { Strategy } from "@yieldhive/database";
import axiosClient from "../config/axios";

export const getAllStrategies = async (): Promise<{
  data: { data: { strategies: NonNullable<Strategy>[] } };
}> => axiosClient.get("/strategies");

export const getStrategyDetail = async (
  slug: string
): Promise<{
  data: { data: { strategy: NonNullable<Strategy> } };
}> => axiosClient.get(`/strategies/${slug}`);
