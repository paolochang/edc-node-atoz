import express from "express";
import "express-async-errors";

const route = express.Router();

let tweets = [
  {
    id: "1",
    message: "드림코딩에서 강의 들으면 너무 좋으다",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "Bob",
    username: "bob",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

// GET `/tweets`
// GET `/tweets?username=:username`
route.get("/", (req, res) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;
  res.status(200).json(data);
});

// GET `/tweets/:id`
route.get("/:id", (req, res) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.send(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// POST `/tweets`
route.post("/", (req, res) => {
  const { message, name, username } = req.body;
  // save to memory or database
  const newTweet = {
    id: Date.now().toString(),
    message,
    createdAt: new Date(),
    name,
    username,
    url: "",
  };
  tweets = [newTweet, ...tweets];
  res.status(201).json(newTweet);
});

// PUT `/tweets`
route.put("/:id", (req, res) => {
  const id = req.params.id;
  const { message } = req.body;
  const edited = tweets.find((tweet) => tweet.id === id);
  if (edited) {
    edited.message = message;
    res.status(201).json(edited);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// DELETE `/tweets`
route.delete("/:id", (req, res) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
});

export default route;
