import { body } from "express-validator";

export const phoneValidation = () =>
  body("phone").notEmpty().isNumeric().withMessage("Phone must be numeric");
