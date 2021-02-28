import { Router, Request, Response } from "express";
import { validationResult } from "express-validator";
import {
  emailValidation,
  passwordValidation,
  phoneValidation,
} from "../validators";
import { InvalidParamsError } from "../errors";
import { signUpService } from "../services";
import { SignUpCredentialsDto } from "../dtos";

export const signupRouter = (router: Router) => {
  router.post(
    "/users/signup",
    [emailValidation("unique"), passwordValidation(), phoneValidation()],
    async (req: Request<{}, {}, SignUpCredentialsDto>, res: Response) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        throw new InvalidParamsError(errors.array());
      }

      const credentials: SignUpCredentialsDto = req.body;

      const jwt = await signUpService(credentials);

      req.session = { jwt };

      res.status(201).send({ token: jwt });
    }
  );
};
