import { StrategyTable } from '@yieldhive/utils/types/tables';

class StrategyService {
	private strategyTable: StrategyTable;

	constructor(strategyTable: StrategyTable) {
		this.strategyTable = strategyTable;
	}

	getStrategyBySlug(slug: string) {
		return this.strategyTable.findFirst({
			where: {
				slug,
			},
		});
	}
}

export default StrategyService;
