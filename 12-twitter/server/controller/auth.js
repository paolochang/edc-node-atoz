import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import * as authRepository from "../data/auth.js";

const secret = "0sPLH8GNr8ppieCC9NmA0SSMcWBHYWke";

export function signup(req, res) {
  const user = req.body;
  const hashed = bcrypt.hashSync(user.password, 10);
  user.password = hashed;
  authRepository.create(user);
  const token = jwt.sign({ username: user.username }, secret);
  return res.status(201).json(token);
}

export function signin(req, res) {
  const user = req.body;
  const found = authRepository.find(user);
  const matched = bcrypt.compareSync(user.password, found.password);
  const token = jwt.sign({ username: user.username }, secret);
  if (matched) return res.status(200).json(token);
  else return res.status(404).json({ message: `Password is not matched` });
}

export function me(req, res) {
  console.log(req.headers.authorization);
  jwt.verify(req.headers.authorization, secret, (error, decoded) => {
    console.log(decoded);
  });
  authRepository.getUser();
  res.status(200);
}
