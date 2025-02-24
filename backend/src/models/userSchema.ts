import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const hash = await bcrypt.hash(this.password, saltRounds);

    this.password = hash;
    next();
  } catch (error) {
    next(new Error("An unknown error occurred"));
  }
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
