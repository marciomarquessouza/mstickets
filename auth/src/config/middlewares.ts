import { Express } from "express";
import { bodyParser, cors } from "../middlewares";

export default (app: Express) => {
  app.use(cors);
  app.use(bodyParser);
};
