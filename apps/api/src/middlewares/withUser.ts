import { prisma } from "@yieldhive/database";
import ResponseUtil from "@yieldhive/utils/lib/ResponseUtil";
import {
  AuthenticatedRequest,
  RequestWithUser,
} from "@yieldhive/utils/types/auth";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";
import isUndefined from "lodash/isUndefined";
import { ENV } from "../config/env";
import AuthService from "../services/AuthService";

type DecodedJWT = {
  sub: string;
};

export const withUserId = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const req = _req as AuthenticatedRequest;

  const authHeader = req.headers.authorization;

  if (authHeader && !isUndefined(authHeader.split(" ")[1])) {
    const token = authHeader.split(" ")[1];

    if (!token) {
      return ResponseUtil.error(res, "Unauthorized", StatusCodes.UNAUTHORIZED);
    }

    try {
      const decoded = verify(token, ENV.JWT_SECRET) as DecodedJWT;
      req.userId = decoded.sub;
      return next();
    } catch (error) {
      return ResponseUtil.error(res, "Unauthorized", StatusCodes.UNAUTHORIZED);
    }
  }

  const { accessToken } = req.cookies;

  if (!accessToken) {
    return ResponseUtil.error(res, "Unauthorized", StatusCodes.UNAUTHORIZED);
  }

  try {
    const decoded = verify(accessToken, ENV.JWT_SECRET) as DecodedJWT;
    req.userId = decoded.sub;
    return next();
  } catch (error) {
    return ResponseUtil.error(res, "Unauthorized", StatusCodes.UNAUTHORIZED);
  }
};

export const withValidUser = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const typedRequest = _req as RequestWithUser;
  const userId = typedRequest.userId;

  const userTable = prisma.user;

  const authService = new AuthService(userTable);

  try {
    const user = await authService.getUserById(userId);

    if (!user) {
      return ResponseUtil.error(res, "Unauthorized", StatusCodes.UNAUTHORIZED);
    }

    typedRequest.user = user;
    next();
  } catch (error) {
    return ResponseUtil.error(res, "Unauthorized", StatusCodes.UNAUTHORIZED);
  }
};
