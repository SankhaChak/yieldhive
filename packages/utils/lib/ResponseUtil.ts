import { Response } from "express";

class ResponseUtil {
  static success<T>(res: Response, data: T, statusCode: number = 200) {
    res.status(statusCode).json({
      success: true,
      data,
      error: null,
      statusCode,
    });
  }

  static error(res: Response, errorMessage: string, statusCode: number = 500) {
    res.status(statusCode).json({
      success: false,
      data: null,
      error: errorMessage,
      statusCode,
    });
  }
}

export default ResponseUtil;
