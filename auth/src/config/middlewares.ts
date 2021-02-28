import { Express } from "express";
import { bodyParser, cors, cookieSession } from "../middlewares";

export default (app: Express) => {
  app.use(cors);
  app.use(bodyParser);
  app.use(cookieSession);
};
