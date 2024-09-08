import { Strategy } from '@yieldhive/database';
import { StatusCodes } from 'http-status-codes';
import { IRequest } from 'itty-router';
import { ImageResponse } from 'workers-og';
import { FONT_URLS } from '../constants/fonts';
import { getStrategyOGImageParamsSchema } from '../schemas/getStrategyOGImage';
import StrategyService from '../services/StrategyService';
import { template } from '../template';
import ResponseUtil from '../util/ResponseUtil';

class OGController {
	private strategyService: StrategyService;
	private fonts: { name: string; data: ArrayBuffer; weight: number }[] = [];

	constructor(strategyService: StrategyService) {
		this.strategyService = strategyService;
	}

	private async loadGoogleFont(googleFontUrl: string) {
		const fontFetchResponse = await fetch(googleFontUrl);
		const fontFetchText = await fontFetchResponse.text();
		const fontUrls = Array.from(fontFetchText.matchAll(/url\((https:\/\/[^)]+)\) format\('woff2'\);.*?font-weight: (\d+);/g)).map(
			(match) => ({
				url: match[1],
				weight: parseInt(match[2], 10),
			}),
		);

		if (fontUrls.length === 0) {
			throw new Error('Font URLs not found in CSS');
		}

		const fontDataPromises = fontUrls.map((font) => fetch(font.url).then((res) => res.arrayBuffer()));
		const fontDataArray = await Promise.all(fontDataPromises);

		const fontName = googleFontUrl.split('family=')[1].split('&')[0];

		this.fonts = fontUrls.map((font, index) => ({
			name: fontName,
			data: fontDataArray[index],
			weight: font.weight,
		}));
	}

	async getStrategyOGImage(req: IRequest, env: Env) {
		const params = req.params;

		const validatedParams = getStrategyOGImageParamsSchema.safeParse(params);

		if (!validatedParams.success) {
			return ResponseUtil.error('Invalid request', StatusCodes.BAD_REQUEST, { errors: validatedParams.error.errors });
		}

		const { slug, font } = validatedParams.data;

		const strategy = await this.strategyService.getStrategyBySlug(slug);

		if (!strategy) {
			return ResponseUtil.error('Invalid request', StatusCodes.BAD_REQUEST);
		}

		const fontUrl = FONT_URLS[font];

		await this.loadGoogleFont(fontUrl);

		const html = template(strategy as Strategy);

		return new ImageResponse(html, {
			width: 800,
			height: 400,
			format: 'svg',
			fonts: this.fonts,
		});
	}
}

export default OGController;
