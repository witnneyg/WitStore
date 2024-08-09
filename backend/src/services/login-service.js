import { databaseConnection } from "../lib/database.js";
import { User } from "../models/models.js";

export async function loginUser() {
  databaseConnection();
}

export async function getUser(email) {
  databaseConnection();

  const getUser = await User.findOne({ email }).select("+password");

  return getUser;
}
