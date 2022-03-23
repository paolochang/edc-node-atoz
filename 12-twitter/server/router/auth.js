import express from "express";
import { body } from "express-validator";

import * as authController from "../controller/auth.js";
import { validate } from "../middleware/validator.js";

const route = express.Router();

const validateCredential = [
  body("username")
    .trim()
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("username must be at least 5 characters."),
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password must be at least 5 characters."),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body("name").notEmpty().withMessage("name is required."),
  body("email").isEmail().normalizeEmail().withMessage("email is invalid."),
  body("url")
    .isURL()
    .withMessage("url is invalid.")
    .optional({ nullable: true, checkFalsy: true }),
];

route.post("/signup", validateSignup, authController.signup);
route.post("/signin", validateCredential, authController.signin);
// route.get("/me", authController.me);

export default route;
