import { User } from "@yieldhive/database";
import { type Request } from "express";
import { z } from "zod";
import { authenticateUserSchema } from "../schema/auth";

export type AuthenticateUserPayload = z.infer<typeof authenticateUserSchema>;

export interface AuthenticateRequest extends Request {
  body: AuthenticateUserPayload;
}

export interface AuthenticatedRequest extends Request {
  userId: string;
}

export interface RequestWithUser extends AuthenticatedRequest {
  user: NonNullable<User>;
}
