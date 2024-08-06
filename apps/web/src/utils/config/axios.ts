import axios from "axios";
import { ENV } from "./env";

const axiosClient = axios.create({
  baseURL: ENV.NEXT_PUBLIC_BACKEND_ENDPOINT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosClient;
