import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// abcd1234: $2b$10$B.2YwNIW1QbT/F6rdz94/O8LHELP1OPLvPYtDouct6waV69gxU.Ze
let users = [
  {
    id: "1",
    username: "bobby",
    password: "$2b$10$B.2YwNIW1QbT/F6rdz94/O8LHELP1OPLvPYtDouct6waV69gxU.Ze",
    name: "Bobby",
    email: "bobby@gmail.com",
    url: null,
  },
];

export async function create(user) {
  const newUser = { ...user, id: Date.now().toString() };
  users.push(newUser);
  return newUser.id;
}

export async function findByUsername(username) {
  return users.find((u) => u.username === username);
}

export async function findById(id) {
  return users.find((u) => u.id === id);
}
