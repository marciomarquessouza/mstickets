import { HttpResponseError } from "./http-error";

export class BadRequestError extends HttpResponseError {
  constructor(message: string) {
    super(message, 400);
    this.name = "BadRequestError";
  }
}
