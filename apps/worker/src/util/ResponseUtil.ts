import { StatusCodes } from 'http-status-codes';

class ResponseUtil {
	static success<T>(data: T, statusCode: number = StatusCodes.OK): Response {
		return new Response(
			JSON.stringify({
				success: true,
				data,
				error: null,
				statusCode,
			}),
			{
				status: statusCode,
				headers: { 'Content-Type': 'application/json' },
			},
		);
	}

	static error<T>(
		errorMessage: string,
		statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR,
		data: Record<string, T> | null = null,
	): Response {
		return new Response(
			JSON.stringify({
				success: false,
				data,
				error: errorMessage,
				statusCode,
			}),
			{
				status: statusCode,
				headers: { 'Content-Type': 'application/json' },
			},
		);
	}
}

export default ResponseUtil;
