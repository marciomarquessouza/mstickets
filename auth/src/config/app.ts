import express from "express";
import setupMiddlewares from "./middlewares";
import setupRoutes from "./routes";
import setupErrorHandler from "./error-handler";
import setupNotFoundHandler from "./not-found";
import "express-async-errors";
import cookieSession from "cookie-session";

const app = express();
app.set("trust proxy", true);
setupMiddlewares(app);
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);
setupRoutes(app);
setupNotFoundHandler(app);
setupErrorHandler(app);

export default app;
