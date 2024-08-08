import { prisma } from "@yieldhive/database";
import { getStrategyDetailSchema } from "@yieldhive/utils/schema/strategy";
import express, {
  type NextFunction,
  type Request,
  type Response,
  type Router,
} from "express";
import StrategyController from "../controllers/StrategyController";
import { validate } from "../middlewares/validator";
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

export default router;
