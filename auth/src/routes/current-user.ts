import { Router, Request, Response } from "express";
import { currentUser, requireAuth } from "../middlewares";

export const currentUserRouter = (router: Router) => {
  router.get(
    "/users/currentuser",
    currentUser,
    requireAuth,
    (req: Request, res: Response) => {
      const currentUser = req.currentUser || null;
      res.send({ currentUser });
    }
  );
};
