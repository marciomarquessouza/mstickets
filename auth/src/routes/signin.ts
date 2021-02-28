import { Router, Request, Response } from "express";
import { emailValidation, passwordValidation } from "../validators";
import { validationResult } from "express-validator";
import { SignInCredentialsDto } from "../dtos";
import { InvalidParamsError } from "../errors";
import { signInService } from "../services";

export const signinRouter = (router: Router) => {
  router.post(
    "/users/signin",
    [emailValidation("existUser"), passwordValidation()],
    async (req: Request<{}, {}, SignInCredentialsDto>, res: Response) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        throw new InvalidParamsError(errors.array());
      }

      const credentials: SignInCredentialsDto = req.body;

      const jwt = await signInService(credentials);

      req.session = { jwt };

      res.status(200).send({ token: jwt });
    }
  );
};
