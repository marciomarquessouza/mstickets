import { HttpResponseError } from "./http-error";
import { parseValidationError } from "./helper";
import { ValidationError } from "express-validator";

export class InvalidParamsError extends HttpResponseError {
  constructor(errors: ValidationError[]) {
    super(parseValidationError(errors), 400);
    this.name = "InvalidParamsError";
  }
}
