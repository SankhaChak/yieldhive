import { StrategyTable } from "../utils/types/db";

class StrategyService {
  private strategyTable: StrategyTable;

  constructor(strategyTable: StrategyTable) {
    this.strategyTable = strategyTable;
  }

  async getStrategies() {
    const strategies = await this.strategyTable.findMany({
      include: {
        chain: true,
        protocols: true,
        tokens: true,
      },
    });
    return strategies;
  }

  async getStrategyBySlug(slug: string) {
    const strategy = await this.strategyTable.findUnique({
      where: {
        slug,
      },
      include: {
        chain: true,
        protocols: true,
        tokens: true,
        steps: {
          include: {
            protocol: true,
            token: true,
          },
        },
        risks: true,
      },
    });

    return strategy;
  }
}

export default StrategyService;
