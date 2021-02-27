import { HttpResponseError } from "./http-error";

export class DatabaseError extends HttpResponseError {
  constructor(message: string) {
    super(message, 500);
    this.name = "DatabaseError";
  }
}
