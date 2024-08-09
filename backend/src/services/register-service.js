import { databaseConnection } from "../lib/database.js";
import { User } from "../models/models.js";

export async function registerUser(user) {
  databaseConnection();

  const { email } = user;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { error: "Email already exists" };
  }

  const registerUser = await User.create(user);

  return registerUser;
}

// export async function getUser(email) {
//   databaseConnection();

//   const user = await User.findOne({ email });

//   return user;
// }
