import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  /** Send JSON */
  // res.json({ name: "Paolo" });

  /** Send 400: Bad Request */
  // res.sendStatus(400);

  /** Set header as a key and value pair */
  res.setHeader("key", "value");

  /** Send 201 and message: "created" */
  res.status(201).send("created");
});

app.listen(8080);
