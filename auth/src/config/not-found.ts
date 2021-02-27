import { Express } from "express";
import { NotFoundError } from "../errors";

export default (app: Express) => {
  app.all("*", async () => {
    throw new NotFoundError();
  });
};
