import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import "express-async-errors";

import authRouter from "./router/auth.js";
import tweetRouter from "./router/tweet.js";
import { config } from "./config.js";
import { initSocket } from "./connection/socket.js";
import { connectDB } from "./db/database.js";
import { csrfCheck } from "./middleware/csrf.js";

const app = express();

const corsOption = {
  origin: [config.cors.allowdOrigin],
  optionsSuccessStatus: 200,
  credentials: true, // allow the Access-Control-Allow-Credentials
};

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOption));
app.use(morgan("tiny"));

app.use(csrfCheck);
app.use("/auth", authRouter);
app.use("/tweets", tweetRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500);
});

connectDB()
  .then(() => {
    console.log("database is connected");
    const server = app.listen(config.host.port);
    initSocket(server);
  })
  .catch(console.error);
