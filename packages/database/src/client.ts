import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export type User = Awaited<ReturnType<typeof prisma.user.findFirst>>;
export type Strategy = Awaited<ReturnType<typeof prisma.strategy.findFirst>>;

export enum UserRole {
  ADMIN = "Admin",
  USER = "User",
}

export * from "@prisma/client";
