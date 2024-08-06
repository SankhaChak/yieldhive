import { AuthenticateUserPayload } from "@yieldhive/utils/types/auth";
import axiosClient from "../config/axios";

export const login = async (payload: AuthenticateUserPayload) =>
  axiosClient.post("/auth/login", payload);

export const logOut = async () => axiosClient.post("/auth/logout");
