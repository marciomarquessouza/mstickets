import { HttpResponseError } from "./http-error";

export class NotFoundError extends HttpResponseError {
  constructor(message: string = "Not Found") {
    super(message, 404);
    this.name = "NotFoundError";
  }
}
