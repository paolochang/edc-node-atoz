import express from "express";

const app = express();

/**
 * GET: http://localhost:8080/
 */
app.get("/", (req, res, next) => {
  console.log(req.path);
  console.log(req.headers);
  console.log(req.params);
  console.log(req.query);
  res.send("Hi!");
});

/**
 * GET: http://localhost:8080/posts/1?tags=bts
 */
app.get("/posts/:id", (req, res, next) => {
  console.log(req.params);
  console.log(req.query);
  res.send("posts");
});

app.listen(8080);
