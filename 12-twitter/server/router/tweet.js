import express from "express";
import { body } from "express-validator";
import "express-async-errors";

import * as tweetController from "../controller/tweet.js";
import { validate } from "../middleware/validator.js";
import { isAuth } from "../middleware/auth.js";

const route = express.Router();

// validation & sanitization
// Contract Testing: Client-Server, Proto-Base
const validateTweet = [
  body("text")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Text must be at least 3 characters"),
  validate,
];

route.get("/", isAuth, tweetController.getTweets);
route.get("/:id", isAuth, tweetController.getTweet);
route.post("/", isAuth, validateTweet, tweetController.create);
route.put("/:id", isAuth, validateTweet, tweetController.update);
route.delete("/:id", isAuth, tweetController.remove);

export default route;
