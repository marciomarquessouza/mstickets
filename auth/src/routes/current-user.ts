import { Router } from "express";

export const currentUserRouter = (router: Router) => {
  router.get("/users/currentuser", (_, res) => {
    res.send({ status: "ok" });
  });
};
