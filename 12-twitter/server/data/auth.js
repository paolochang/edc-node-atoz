import MongoDb from "mongodb";
import { getUsers } from "../db/database.js";

const ObjectId = MongoDb.ObjectId;

export async function create(user) {
  return getUsers()
    .insertOne(user)
    .then((data) => data.insertedId.toString());
}

export async function findByUsername(username) {
  return getUsers()
    .findOne({ username }) //
    .then(mapOptionalUser);
}

export async function findById(id) {
  return getUsers()
    .findOne({ _id: new ObjectId(id) })
    .then(mapOptionalUser);
}

function mapOptionalUser(user) {
  return user ? { ...user, id: user._id.toString() } : user;
}
