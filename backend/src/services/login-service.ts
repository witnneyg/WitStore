import { MongoClient } from "../database/mongo.js";
import { User } from "../models/userSchema.js";

export async function loginUser() {
  await MongoClient.connect();
}

export async function getUser(email) {
  await MongoClient.connect();

  const getUser = await User.findOne({ email }).select("+password");

  return getUser;
}
