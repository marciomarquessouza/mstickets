import { Express, Router } from "express";
import * as routes from "../routes";

export default (app: Express) => {
  const router = Router();
  routes.signinRouter(router);
  routes.signupRouter(router);
  routes.signoutRouter(router);
  routes.currentUserRouter(router);
  app.use("/api", router);
};
