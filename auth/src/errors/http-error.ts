export class HttpResponseError extends Error {
  constructor(message: string, public status = 500) {
    super(message);
    this.status = status;
  }
}
