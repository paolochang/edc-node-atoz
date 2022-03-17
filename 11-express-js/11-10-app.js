import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
import {} from "express-async-errors";

const app = express();

app.use(express.json());

app
  .route("/posts")
  .get((req, res) => {
    res.status(201).send("GET: /posts");
  })
  .post((req, res) => {
    res.status(201).send("POST: /posts");
  });

app
  .route("/posts/:id")
  .put((req, res) => {
    res.status(201).send("PUT: /posts");
  })
  .delete((req, res) => {
    res.status(201).send("DELETE: /posts");
  });

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(8080);
