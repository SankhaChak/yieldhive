import { prisma } from '@yieldhive/database';
import { AutoRouter } from 'itty-router';
import OGController from './controllers/OGController';
import StrategyService from './services/StrategyService';

const router = AutoRouter();

const strategyTable = prisma.strategy;

const strategyService = new StrategyService(strategyTable);
const ogController = new OGController(strategyService);

router.get('/v1/og-image', ogController.getStrategyOGImage);

export default {
	fetch: router.handle,
};
