import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(400).send({ error: "Token no provided" });
  }

  const [schema, token] = authHeader.split(" ");

  if (schema.indexOf("Bearer") !== 0) {
    return res.status(401).send({ error: "Token malformatted" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTSecret);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).send({ error: "Token invalid/expired" });
  }
}
