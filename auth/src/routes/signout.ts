import { Router } from "express";

export const signoutRouter = (router: Router) => {
  router.post("/users/signout", (req, res) => {
    console.log(`Signing out the current user`);
    req.session = null;
    res.send({});
  });
};
