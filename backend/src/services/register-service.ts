// import { MongoClient } from "../database/mongo.js";
// import { User } from "../models/userSchema.js";

// export async function registerUser(user) {
//   await MongoClient.connect();

//   const { email } = user;

//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return { error: "Email already exists" };
//   }

//   const registerUser = await User.create(user);

//   return registerUser;
// }
