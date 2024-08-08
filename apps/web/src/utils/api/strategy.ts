import axiosClient from "../config/axios";
import { Strategy } from "../types";

export const getAllStrategies = async (): Promise<{
  data: { data: { strategies: Strategy[] } };
}> => axiosClient.get("/strategies");

export const getStrategyDetail = async (
  slug: string
): Promise<{
  data: { data: { strategy: Strategy } };
}> => axiosClient.get(`/strategies/${slug}`);
