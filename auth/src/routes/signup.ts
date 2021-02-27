import { Router, Request, Response } from "express";
import { validationResult } from "express-validator";
import {
  emailValidation,
  passwordValidation,
  phoneValidation,
} from "../validators";
import { InvalidParamsError } from "../errors";
import { createUser } from "../services";
import { SignUpUserDto } from "../dtos";

export const signupRouter = (router: Router) => {
  router.post(
    "/users/signup",
    [emailValidation(), passwordValidation(), phoneValidation()],
    async (req: Request<{}, {}, SignUpUserDto>, res: Response) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        throw new InvalidParamsError(errors.array());
      }

      const { email, password, phone } = req.body;

      console.log(`Signing up a new user: ${email}`);

      const user = await createUser({ email, password, phone });

      res.send({ user: user.email });
    }
  );
};
