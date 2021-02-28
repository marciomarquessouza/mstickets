import { Router, Request, Response } from "express";
import { verifyJwt } from "../utils";

export const currentUserRouter = (router: Router) => {
  router.get("/users/currentuser", (req: Request, res: Response) => {
    if (!req.session?.jwt) {
      console.log("HERE");
      return res.send({ currentUser: null });
    }

    try {
      const payload = verifyJwt({ token: req.session.jwt });
      return res.send({ currentUser: payload });
    } catch (error) {
      return res.send({ currentUser: null });
    }
  });
};
