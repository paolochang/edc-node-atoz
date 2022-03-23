import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

let users = [];

export function create(user) {
  users.push(user);
}

export function find(user) {
  return users.find((u) => u.username === user.username);
}

export function getMe() {}
