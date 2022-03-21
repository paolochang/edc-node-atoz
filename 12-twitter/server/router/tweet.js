import express from "express";
import "express-async-errors";

import * as tweetRepository from "../data/tweet.js";

const route = express.Router();

// GET `/tweets`
// GET `/tweets?username=:username`
route.get("/", (req, res) => {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll();
  res.status(200).json(data);
});

// GET `/tweets/:id`
route.get("/:id", (req, res) => {
  const id = req.params.id;
  const tweet = tweetRepository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.send(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// POST `/tweets`
route.post("/", (req, res) => {
  const { text, name, username } = req.body;
  // save to memory or database
  const tweet = tweetRepository.create(text, name, username);
  res.status(201).json(tweet);
});

// PUT `/tweets`
route.put("/:id", (req, res) => {
  const id = req.params.id;
  const { text } = req.body;
  const edited = tweetRepository.update(id, text);
  if (edited) {
    res.status(201).json(edited);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// DELETE `/tweets`
route.delete("/:id", (req, res) => {
  const id = req.params.id;
  tweetRepository.remove(id);
  res.sendStatus(204);
});

export default route;
