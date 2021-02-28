import { body } from "express-validator";

export const passwordValidation = () =>
  body("password")
    .trim()
    .notEmpty()
    .isString()
    .isLength({ min: 5 })
    .withMessage("Password must have more than 5 characters");
