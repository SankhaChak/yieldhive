import { SIGNIN_MESSAGE } from "@yieldhive/utils/constants/wallet";
import ResponseUtil from "@yieldhive/utils/lib/ResponseUtil";
import { AuthenticateRequest } from "@yieldhive/utils/types/auth";
import { ethers } from "ethers";
import { type NextFunction, type Response } from "express";
import { StatusCodes } from "http-status-codes";
import AuthService from "../services/AuthService";
import TokenService from "../services/TokenService";

class AuthController {
  private authService: AuthService;
  private tokenService: TokenService;

  constructor(authService: AuthService, tokenService: TokenService) {
    this.authService = authService;
    this.tokenService = tokenService;
  }

  async authenticateUser(
    req: AuthenticateRequest,
    res: Response,
    next: NextFunction
  ) {
    const { walletAddress, signature } = req.body;
    const message = SIGNIN_MESSAGE;

    try {
      const messageHash = ethers.hashMessage(message);
      const recoveredAddress = ethers.recoverAddress(messageHash, signature);

      if (recoveredAddress.toLowerCase() !== walletAddress.toLowerCase()) {
        return ResponseUtil.error(
          res,
          "Invalid signature",
          StatusCodes.UNAUTHORIZED
        );
      }

      const user = await this.authService.authenticateUser(walletAddress);
      this.attachToken(user, res, next);

      ResponseUtil.success(res, {
        message: "User authenticated successfully",
        user: {
          id: user.id,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        ResponseUtil.error(res, error.message);
      }
    }
  }

  async attachToken(
    user: Awaited<ReturnType<typeof this.authService.authenticateUser>>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const token = this.tokenService.generateAccessToken({
        sub: user.id,
        ...user,
      });

      res.cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 1000 * 7,
      });
    } catch (error) {
      return next(error);
    }
  }
}

export default AuthController;
