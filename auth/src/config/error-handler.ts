import { Express } from "express";
import { errorHandler } from "../errors";

export default (app: Express) => {
  app.use(errorHandler);
};
