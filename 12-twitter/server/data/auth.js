import { db } from "../db/database.js";

/**
 * Using memory users data
 * abcd1234: $2b$10$B.2YwNIW1QbT/F6rdz94/O8LHELP1OPLvPYtDouct6waV69gxU.Ze
 * let users = [
 *   {
 *     id: "1",
 *     username: "bobby",
 *     password: "$2b$10$B.2YwNIW1QbT/F6rdz94/O8LHELP1OPLvPYtDouct6waV69gxU.Ze",
 *     name: "Bobby",
 *     email: "bobby@gmail.com",
 *     url: "",
 *   },
 *   {
 *     id: "2",
 *     username: "ellie",
 *     password: "$2b$10$B.2YwNIW1QbT/F6rdz94/O8LHELP1OPLvPYtDouct6waV69gxU.Ze",
 *     name: "Ellie",
 *     email: "ellie@gmail.com",
 *     url: "",
 *   },
 * ];
 */

export async function create(user) {
  // const newUser = { ...user, id: Date.now().toString() };
  // users.push(newUser);
  // return newUser.id;
  const { username, password, name, email, url } = user;
  return db
    .execute(
      "INSERT INTO users (username, password, name, email, url) VALUES(?,?,?,?,?)",
      [username, password, name, email, url]
    )
    .then((result) => result[0].insertId);
}

export async function findByUsername(username) {
  // return users.find((u) => u.username === username);
  return db
    .execute("SELECT * FROM users WHERE username=?", [username])
    .then((result) => result[0][0]);
}

export async function findById(id) {
  // return users.find((u) => u.id === id);
  return db
    .execute("SELECT * FROM users WHERE id=?", [id])
    .then((result) => result[0][0]);
}
