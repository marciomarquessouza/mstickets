import { ValidationError } from "express-validator";

export function parseValidationError(errors: ValidationError[]): string {
  return errors
    .map((error) => `Field: ${error.param}: Message: ${error.msg}`)
    .join(" | ");
}
