import { Router } from "express";

export const signoutRouter = (router: Router) => {
  router.post("/users/signout", (_, res) => {
    res.send({ status: "ok" });
  });
};
