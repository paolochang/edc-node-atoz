import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import * as userRepository from "../data/auth.js";
import {
  BCRYPT_SALT_ROUNDS,
  JWT_EXPIRES_IN,
  JWT_SECRET_KEY,
} from "../constants.js";

export async function signup(req, res) {
  const { username, password, name, email, url } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }
  const hashed = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS);
  const userId = await userRepository.create({
    username,
    password: hashed,
    name,
    email,
    url,
  });
  const token = createJwtToken(userId);
  return res.status(201).json({ token, username });
}

export async function signin(req, res) {
  const { username, password } = req.body;
  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: `Invalid user or password` });
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: `Invalid user or password` });
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
}

function createJwtToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRES_IN });
}

export async function me(req, res) {
  const user = await userRepository.findById(req.userId);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json({ token: req.token, username: user.username });
}
