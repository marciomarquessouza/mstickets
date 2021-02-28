import { body } from "express-validator";
import { findUser } from "../repository";

type verificationType = "unique" | "existUser";

export const emailValidation = (verification?: verificationType) =>
  body("email")
    .isEmail()
    .isString()
    .custom(async (email) => {
      if (verification) {
        const checkUser = await findUser(email);
        switch (verification) {
          case "unique":
            if (checkUser) {
              return Promise.reject("This e-mail is already in use");
            }
            break;
          case "existUser":
            if (!checkUser) {
              return Promise.reject("Email not found");
            }
            break;
        }
      }
    })
    .withMessage("Provide a valid email");
