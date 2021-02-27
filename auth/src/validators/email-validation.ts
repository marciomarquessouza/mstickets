import { body } from "express-validator";
import { findUser } from "../services";

export const emailValidation = (message = "Provide a valid email") =>
  body("email")
    .isEmail()
    .isString()
    .custom(async (email) => {
      const checkUser = await findUser(email);
      if (checkUser) {
        return Promise.reject("This e-mail is already in use");
      }
    })
    .withMessage(message);
