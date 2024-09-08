import { z } from 'zod';
import { FONT_URLS } from '../constants/fonts';

type FontKey = keyof typeof FONT_URLS;
const fontEnum = z.enum(Object.keys(FONT_URLS) as [FontKey, ...FontKey[]]);

export const getStrategyOGImageParamsSchema = z.object({
	slug: z.string(),
	font: fontEnum.optional().default('INTER'),
});
