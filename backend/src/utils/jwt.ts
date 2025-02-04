import jwt from "jsonwebtoken";
import { IUser } from "../models/userSchema.js";

export function generateToken(user: IUser) {
  return jwt.sign(
    { _id: user._id, email: user.email, role: user.role },
    process.env.JWTSECRET,
    {
      expiresIn: "100y",
    }
  );
}
