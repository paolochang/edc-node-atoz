import express from "express";
import { body } from "express-validator";
import "express-async-errors";

import * as tweetController from "../controller/tweet.js";
import { validate } from "../middleware/validator.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

// validation & sanitization
// Contract Testing: Client-Server, Proto-Base
const validateTweet = [
  body("text")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Text must be at least 3 characters"),
  validate,
];

router.get("/", isAuth, tweetController.getTweets);
router.get("/:id", isAuth, tweetController.getTweet);
router.post("/", isAuth, validateTweet, tweetController.create);
router.put("/:id", isAuth, validateTweet, tweetController.update);
router.delete("/:id", isAuth, tweetController.remove);

export default router;
