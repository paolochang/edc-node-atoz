import express from "express";

const app = express();

/**
 * parse request body as JSON
 */
app.use(express.json());

app.post("/", (req, res, nex) => {
  console.log(req.body);
});

app.listen(8080);
