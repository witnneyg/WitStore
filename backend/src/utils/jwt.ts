import jwt from "jsonwebtoken";
import { IUser } from "../models/userSchema.js";

export function generateToken(user: IUser) {
  return jwt.sign(
    { _id: user._id, email: user.email, role: user.role },
    process.env.JWTSECRET as string,
    {
      expiresIn: "100y",
    }
  );
}
