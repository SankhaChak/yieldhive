import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Express } from "express";
import authRouter from "./routes/auth";
import healthRouter from "./routes/health";

export const createServer = (): Express => {
  const server = express();

  server.use(
    cors({
      // origin: [], // Add frontend URL here
      credentials: true,
    })
  );

  server.use(cookieParser());
  server.use(express.json());

  server.use("/v1/health", healthRouter);
  server.use("/v1/auth", authRouter);

  return server;
};
