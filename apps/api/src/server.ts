import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Express } from "express";
import authRouter from "./routes/auth";
import healthRouter from "./routes/health";
import strategyRouter from "./routes/strategy";

export const createServer = (): Express => {
  const server = express();

  server.use(
    cors({
      origin: ["http://localhost:3000"], // Add frontend URL here
      credentials: true,
    })
  );

  server.use(cookieParser());
  server.use(express.json());

  server.use("/v1/health", healthRouter);
  server.use("/v1/auth", authRouter);
  server.use("/v1/strategies", strategyRouter);

  return server;
};
