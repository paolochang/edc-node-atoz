import express from "express";
import "express-async-errors";

import * as tweetController from "../controller/tweet.js";

const route = express.Router();

route.get("/", tweetController.getTweets);
route.get("/:id", tweetController.getTweet);
route.post("/", tweetController.create);
route.put("/:id", tweetController.update);
route.delete("/:id", tweetController.remove);

export default route;
