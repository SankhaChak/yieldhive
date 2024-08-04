import { SIGNIN_MESSAGE } from "@yieldhive/utils/constants/wallet";
import ResponseUtil from "@yieldhive/utils/lib/ResponseUtil";
import { AuthenticateRequest } from "@yieldhive/utils/types/auth";
import { ethers } from "ethers";
import { type NextFunction, type Request, type Response } from "express";
import { StatusCodes } from "http-status-codes";
import AuthService from "../services/AuthService";

class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async authenticateUser(
    req: AuthenticateRequest,
    res: Response,
    next: NextFunction
  ) {
    const { walletAddress, publicKey, signature } = req.body;
    const message = SIGNIN_MESSAGE;

    try {
      const messageHash = ethers.hashMessage(message);
      const recoveredAddress = ethers.recoverAddress(messageHash, signature);
      const addressFromPublicKey = ethers.computeAddress(publicKey);

      if (
        recoveredAddress.toLowerCase() !== addressFromPublicKey.toLowerCase()
      ) {
        return ResponseUtil.error(
          res,
          "Invalid signature",
          StatusCodes.UNAUTHORIZED
        );
      }

      const user = await this.authService.authenticateUser(walletAddress);

      ResponseUtil.success(res, {
        message: "User authenticated successfully",
        user: { id: user.id },
      });
    } catch (error) {
      if (error instanceof Error) {
        ResponseUtil.error(res, error.message);
      }
    }
  }

  async attachToken(req: Request, res: Response, next: NextFunction) {}
}

export default AuthController;
