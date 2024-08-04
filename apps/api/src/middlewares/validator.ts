import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AnyZodObject, ZodError } from "zod";

export const validate = (schema: {
  body?: AnyZodObject;
  params?: AnyZodObject;
}) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schema.body) {
        schema.body.parse(req.body);
      }
      if (schema.params) {
        schema.params.parse(req.params);
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }));
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: "Invalid data", details: errorMessages });
      } else {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: "Internal Server Error" });
      }
    }
  };
};
