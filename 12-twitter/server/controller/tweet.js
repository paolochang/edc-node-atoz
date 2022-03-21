import * as tweetRepository from "../data/tweet.js";

export function getTweets(req, res) {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll();
  res.status(200).json(data);
}

export function getTweet(req, res) {
  const id = req.params.id;
  const tweet = tweetRepository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.send(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export function create(req, res) {
  const { text, name, username } = req.body;
  // save to memory or database
  const tweet = tweetRepository.create(text, name, username);
  res.status(201).json(tweet);
}

export function update(req, res) {
  const id = req.params.id;
  const { text } = req.body;
  const edited = tweetRepository.update(id, text);
  if (edited) {
    res.status(201).json(edited);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export function remove(req, res) {
  const id = req.params.id;
  tweetRepository.remove(id);
  res.sendStatus(204);
}
