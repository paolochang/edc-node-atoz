import { db } from "../db/database.js";
import * as userRepository from "./auth.js";

/**
 * Using memory tweets data
 *
 * let tweets = [
 *   {
 *     id: "1",
 *     text: "드림코딩에서 강의 들으면 너무 좋으다",
 *     createdAt: new Date().toString(),
 *     userId: "1",
 *   },
 *   {
 *     id: "2",
 *     text: "안녕?",
 *     createdAt: new Date().toString(),
 *     userId: "1",
 *   },
 * ];
 */

const SELECT_JOIN =
  "SELECT tw.id, tw.text, tw.createdAt, tw.userId, usr.username, usr.name, usr.url FROM tweets as tw JOIN users as usr ON tw.userId=usr.id";
const ORDER_DESC = "ORDER BY tw.createdAt DESC";

export async function getAll() {
  // return Promise.all(
  //   tweets.map(async (tweet) => {
  //     const { username, name, url } = await userRepository.findById(
  //       tweet.userId
  //     );
  //     return { ...tweet, username, name, url };
  //   })
  // );
  return db
    .execute(`${SELECT_JOIN} ${ORDER_DESC}`) //
    .then((result) => result[0]);
}

export async function getAllByUsername(username) {
  // return getAll().then((tweets) =>
  //   tweets.filter((tweet) => tweet.username === username)
  // );
  return db
    .execute(`${SELECT_JOIN} WHERE username=? ${ORDER_DESC}`, [username]) //
    .then((result) => result[0]);
}

export async function getById(tweetId) {
  // const found = tweets.find((tweet) => tweet.id === tweetId);
  // if (!found) {
  //   return null;
  // }
  // const { username, name, url } = await userRepository.findById(found.userId);
  // return { ...found, username, name, url };
  return db
    .execute(`${SELECT_JOIN} WHERE tw.id=?`, [tweetId]) //
    .then((result) => result[0][0]);
}

export async function create(text, userId) {
  // const newTweet = {
  //   id: Date.now().toString(),
  //   text,
  //   createdAt: new Date(),
  //   userId,
  // };
  // tweets = [newTweet, ...tweets];
  // return getById(newTweet.id);
  return db
    .execute("INSERT INTO tweets (text, createdAt, userId) VALUES(?,?,?)", [
      text,
      new Date(),
      userId,
    ])
    .then((result) => getById(result[0].insertId));
}

export async function update(id, text) {
  // const tweet = tweets.find((tweet) => tweet.id === id);
  // if (tweet) tweet.text = text;
  // return getById(tweet.id);
  return db
    .execute("UPDATE tweets SET text=? WHERE id=?", [text, id])
    .then(() => getById(id));
}

export async function remove(tweetId) {
  // tweets = tweets.filter((tweet) => tweet.id !== tweetId);
  return db.execute("DELETE FROM tweets WHERE id=?", [tweetId]);
}
