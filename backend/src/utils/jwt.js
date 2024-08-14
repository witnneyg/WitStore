import jwt from "jsonwebtoken";

export function generateToken(user) {
  return jwt.sign({ _id: user._id, email: user.email }, process.env.JWTSECRET, {
    expiresIn: "24h",
  });
}