import { StrategyTable } from "../utils/types/db";

class StrategyService {
  private strategyTable: StrategyTable;

  constructor(strategyTable: StrategyTable) {
    this.strategyTable = strategyTable;
  }

  async getStrategies() {
    const strategies = await this.strategyTable.findMany();
    return strategies;
  }

  async getStrategyBySlug(slug: string) {
    const strategy = await this.strategyTable.findUnique({
      where: {
        slug,
      },
    });

    return strategy;
  }
}

export default StrategyService;
