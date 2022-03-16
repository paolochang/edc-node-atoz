import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  console.log("get");
  res.send("Hi!");
});

app.listen(8080);
