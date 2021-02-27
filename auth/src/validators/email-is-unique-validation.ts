import { body } from "express-validator";
import { findUser } from "../services";

export const emailIsUniquelValidation = () =>
  body("email").custom(async (email) => {
    const checkUser = await findUser(email);
    if (checkUser) {
      return Promise.reject("This e-mail is already in use");
    }
  });
