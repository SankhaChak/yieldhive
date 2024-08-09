import { UserRole } from "@yieldhive/database";
import ResponseUtil from "@yieldhive/utils/lib/ResponseUtil";
import { AuthenticatedRequest } from "@yieldhive/utils/types/auth";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const canAccess = (roles: UserRole[] = []) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const typedReq = req as AuthenticatedRequest;
    const userRole = typedReq.user?.role as UserRole;

    if (!roles.includes(userRole)) {
      return ResponseUtil.error(res, "Forbidden", StatusCodes.FORBIDDEN);
    }

    next();
  };
};

export default canAccess;
