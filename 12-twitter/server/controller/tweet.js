import * as tweetRepository from "../data/tweet.js";

export async function getTweets(req, res) {
  const username = req.query.username;
  const data = await (username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll());
  res.status(200).json(data);
}

export async function getTweet(req, res) {
  const id = req.params.id;
  const tweet = await tweetRepository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.send(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export async function create(req, res) {
  const { text } = req.body;
  // save to memory or database
  const tweet = await tweetRepository.create(text, req.userId);
  res.status(201).json(tweet);
}

export async function update(req, res) {
  const id = req.params.id;
  const { text } = req.body;
  const edited = await tweetRepository.update(id, text);
  if (edited) {
    res.status(201).json(edited);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export async function remove(req, res) {
  const id = req.params.id;
  await tweetRepository.remove(id);
  res.sendStatus(204);
}
