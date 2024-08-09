import { prisma, UserRole } from "@yieldhive/database";
import {
  addStrategySchema,
  getStrategyDetailSchema,
} from "@yieldhive/utils/schema/strategy";
import express, {
  type NextFunction,
  type Request,
  type Response,
  type Router,
} from "express";
import StrategyController from "../controllers/StrategyController";
import canAccess from "../middlewares/canAccess";
import { validate } from "../middlewares/validator";
import { withUserId, withValidUser } from "../middlewares/withUser";
import StrategyService from "../services/StrategyService";

const router: Router = express.Router();

const strategyTable = prisma.strategy;

const strategyService = new StrategyService(strategyTable);
const strategyController = new StrategyController(strategyService);

router.get("/", (req: Request, res: Response, next: NextFunction) =>
  strategyController.getAllStrategies(req, res, next)
);

router.get(
  "/:slug",
  validate({ params: getStrategyDetailSchema }),
  (req: Request, res: Response, next: NextFunction) =>
    strategyController.getStrategyDetail(req, res, next)
);

router.post(
  "/",
  withUserId,
  withValidUser,
  canAccess([UserRole.ADMIN]),
  validate({ body: addStrategySchema }),
  (req: Request, res: Response, next: NextFunction) =>
    strategyController.getStrategyDetail(req, res, next)
);

export default router;
