import express from "express";
import * as authController from "../controller/auth.js";

const route = express.Router();

route.post("/signup", authController.signup);
route.post("/signin", authController.signin);
route.get("/me", authController.me);

export default route;
