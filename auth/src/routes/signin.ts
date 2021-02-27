import { Router, Request, Response } from "express";
import { emailValidation, passwordValidation } from "../validators";
import { validationResult } from "express-validator";
import { SignInUserDto } from "../dtos";
import { InvalidParamsError } from "../errors";
import { validatePassword } from "../services";

export const signinRouter = (router: Router) => {
  router.post(
    "/users/signin",
    [emailValidation(), passwordValidation()],
    async (req: Request<{}, {}, SignInUserDto>, res: Response) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        throw new InvalidParamsError(errors.array());
      }

      const { email, password } = req.body;

      const isValid = await validatePassword({ email, password });

      res.send({ status: isValid });
    }
  );
};
