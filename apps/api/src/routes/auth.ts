import { prisma } from "@yieldhive/database";
import { authenticateUserSchema } from "@yieldhive/utils/schema/auth";
import { AuthenticateRequest } from "@yieldhive/utils/types/auth";
import express, {
  type NextFunction,
  type Request,
  type Response,
  type Router,
} from "express";
import AuthController from "../controllers/AuthController";
import { validate } from "../middlewares/validator";
import AuthService from "../services/AuthService";
import TokenService from "../services/TokenService";

const router: Router = express.Router();

const userTable = prisma.user;

const authService = new AuthService(userTable);
const tokenService = new TokenService();

const authController = new AuthController(authService, tokenService);

router.post(
  "/login",
  validate({ body: authenticateUserSchema }),
  (req: Request, res: Response, next: NextFunction) =>
    authController.authenticateUser(req as AuthenticateRequest, res, next)
);

export default router;
