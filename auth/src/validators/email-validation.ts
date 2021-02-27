import { body } from "express-validator";

export const emailValidation = (message = "Provide a valid email") =>
  body("email").isEmail().isString().withMessage(message);
