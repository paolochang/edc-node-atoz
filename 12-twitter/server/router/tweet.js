import express from "express";
import { body } from "express-validator";
import "express-async-errors";

import * as tweetController from "../controller/tweet.js";
import { validate } from "../middleware/validator.js";

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

route.get("/", tweetController.getTweets);
route.get("/:id", tweetController.getTweet);
route.post("/", validateTweet, tweetController.create);
route.put("/:id", validateTweet, tweetController.update);
route.delete("/:id", tweetController.remove);

export default route;
