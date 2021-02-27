import { Request, Response, NextFunction } from "express";
import { HttpResponseError } from "./http-error";

export const errorHandler = (
  error: HttpResponseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`Something went wrong: ${error.message}`);

  res.status(error.status || 500).send({
    message: `Something went wrong: ${error.message || "unexpected error"}`,
  });
};
