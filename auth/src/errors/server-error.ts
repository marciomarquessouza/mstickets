import { HttpResponseError } from "./http-error";

export class ServerError extends HttpResponseError {
  constructor(message: string = "Internal Server Error") {
    super(message, 500);
    this.name = "ServerError";
  }
}
