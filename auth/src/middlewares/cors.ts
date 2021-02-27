import { Response, NextFunction } from "express";

export const cors = (_, res: Response, next: NextFunction) => {
  res.set("access-control-allow-origin", "*");
  res.set("access-control-allow-methods", "*");
  res.set("access-control-allow-headers", "*");
  next();
};
