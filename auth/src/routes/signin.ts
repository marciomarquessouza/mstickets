import { Router } from "express";

export const signinRouter = (router: Router) => {
  router.post("/users/signin", (_, res) => {
    res.send({ status: "ok" });
  });
};
