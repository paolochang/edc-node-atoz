import express from "express";
import tweetRouter from "./router/tweet.js";

const app = express();

app.use(express.json());

app.use("/tweets", tweetRouter);

app.listen(8080);
