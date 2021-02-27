import { HttpResponseError } from "./http-error";

export class InvalidParamsError extends HttpResponseError {
  constructor(message: string) {
    super(message, 400);
    this.name = "InvalidParamsError";
  }
}
