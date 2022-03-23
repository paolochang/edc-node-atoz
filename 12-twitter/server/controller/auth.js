import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import * as userRepository from "../data/auth.js";

const jwtSecretKey = "0sPLH8GNr8ppieCC9NmA0SSMcWBHYWke";
const jwtExpireIn = "2d";
const bcryptSaltRounds = 10;

export async function signup(req, res) {
  const { username, password, name, email, url } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }
  const hashed = bcrypt.hashSync(password, bcryptSaltRounds);
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
  const user = userRepository.findByUsername(username);
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
  return jwt.sign({ userId }, jwtSecretKey, { expiresIn: jwtExpireIn });
}

// export function me(req, res) {
//   console.log(req.headers.authorization);
//   jwt.verify(req.headers.authorization, secret, (error, decoded) => {
//     console.log(decoded);
//   });
//   userRepository.getUser();
//   res.status(200);
// }
