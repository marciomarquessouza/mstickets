import { HttpResponseError } from "./http-error";

export class NotAuthorizedError extends HttpResponseError {
  constructor(message: string = "Not Authorized") {
    super(message, 401);
    this.name = "NotAuthorizedError";
  }
}
