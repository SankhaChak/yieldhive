import ResponseUtil from "@yieldhive/utils/lib/ResponseUtil";
import { type GetStrategyDetailPayload } from "@yieldhive/utils/types/strategy";
import { type NextFunction, type Request, type Response } from "express";
import StrategyService from "../services/StrategyService";

class StrategyController {
  private strategyService: StrategyService;

  constructor(strategyService: StrategyService) {
    this.strategyService = strategyService;
  }

  async getAllStrategies(_req: Request, res: Response, _next: NextFunction) {
    try {
      const strategies = await this.strategyService.getStrategies();

      ResponseUtil.success(res, {
        strategies,
      });
    } catch (error) {
      if (error instanceof Error) {
        ResponseUtil.error(
          res,
          "We are experiencing some issues getting the strategies, please try again later!"
        );
      }
    }
  }

  async getStrategyDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const params = req.params as GetStrategyDetailPayload;
      const strategySlug = params.slug;

      const strategy =
        await this.strategyService.getStrategyBySlug(strategySlug);

      if (!strategy) {
        return ResponseUtil.error(res, "Invalid slug", 404);
      }

      ResponseUtil.success(res, {
        strategy,
      });
    } catch (error) {
      if (error instanceof Error) {
        ResponseUtil.error(
          res,
          "We are experiencing some issues getting the strategy, please try again later!"
        );
      }
    }
  }
}

export default StrategyController;
