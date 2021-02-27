import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { InvalidParamsError } from "../errors";

export const signupRouter = (router: Router) => {
  router.post(
    "/users/signup",
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Password must have the min of 5 characters"),
    (req: Request, res: Response) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        throw new InvalidParamsError("Invalid Credentials");
      }
      const { email, password } = req.body;

      console.log(`Signing up a new user: ${email}`);

      res.send({ email, password });
    }
  );
};
