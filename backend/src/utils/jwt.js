import jwt from "jsonwebtoken";

export function generateToken(user) {
  return jwt.sign(
    { _id: user._id, email: user.email, role: user.role },
    process.env.JWTSECRET,
    {
      expiresIn: "100y",
    }
  );
}
