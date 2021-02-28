import express from "express";
import setupMiddlewares from "./middlewares";
import setupRoutes from "./routes";
import setupErrorHandler from "./error-handler";
import setupNotFoundHandler from "./not-found";
import "express-async-errors";

const app = express();
app.set("trust proxy", true);
setupMiddlewares(app);
setupRoutes(app);
setupNotFoundHandler(app);
setupErrorHandler(app);

export default app;
