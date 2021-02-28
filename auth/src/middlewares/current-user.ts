import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils";

interface IUserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: IUserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const token = req.session.jwt;
    const payload = verifyJwt<IUserPayload>({ token });
    req.currentUser = payload;
  } catch (error) {}

  next();
};
