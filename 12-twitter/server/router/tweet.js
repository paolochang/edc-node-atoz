import express from "express";

const route = express.Router();

const tweets = [
  {
    id: 1,
    message: "드림코딩에서 강의 들으면 너무 좋으다",
    createdAt: "2021-05-09T04:20:57.000Z",
    name: "Bob",
    username: "bob",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

// GET
route.get("/", (req, res) => {
  if (req.query.username) {
    const filtered = tweets.filter(
      (obj) => obj.username === req.query.username
    );
    res.status(200).json(filtered);
  } else {
    res.status(200).json(tweets);
  }
});

route.get("/:id", (req, res) => {
  if (req.params.id) {
    const found = tweets.filter((obj) => obj.id === +req.params.id);
    if (found) res.status(200).json(found);
    else res.status(204).json({ message: "Tweet not found." });
  } else {
    res.status(404).json({ message: "Tweet not found" });
  }
});

// POST
route.post("/", (req, res) => {
  const body = req.body;
  // save to memory or database
  if (body) {
    const newTweet = {
      id: tweets.length + 1,
      message: body.message,
      createdAt: new Date(),
      name: body.name,
      username: body.username,
      url: "",
    };
    tweets.push(newTweet);
    res.status(201).json(newTweet);
  } else {
    res.status(500).json({ message: "Tweet cannot be created" });
  }
});

// PUT
route.put("/:id", (req, res) => {
  const body = req.body;
  if (req.params.id) {
    const index = tweets.findIndex((tweet) => tweet.id === +req.params.id);
    tweets[index] = {
      ...tweets[index],
      message: body.message,
    };
    res.status(201).json(tweets[index]);
  } else res.status(500).json({ message: "Tweet id is not found" });
});

// DELETE
route.delete("/:id", (req, res) => {
  if (req.params.id) {
    tweets.splice(
      tweets.findIndex((obj) => obj.id === +req.params.id),
      1
    );
    res.status(204).json({ message: "Tweet is successfully deleted" });
  } else res.status(500).json({ message: "Tweet id is not found" });
});

export default route;
