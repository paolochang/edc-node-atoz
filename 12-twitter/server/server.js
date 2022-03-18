import express from "express";
import postRouter from "./router/post.js";

const app = express();

app.use(express.json());

app.use("/posts", postRouter);

app.listen(3000);
