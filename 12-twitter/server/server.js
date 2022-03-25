import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-errors";

import authRouter from "./router/auth.js";
import tweetRouter from "./router/tweet.js";
import { config } from "./config.js";
import { Server } from "socket.io";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/auth", authRouter);
app.use("/tweets", tweetRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500);
});

const server = app.listen(config.host.port);
const socket = new Server(server, {
  cors: {
    origin: "*",
  },
});

socket.on("connection", (socket) => {
  console.log("Client is here!");
  socket.emit("twitter", "Hello!");
});
