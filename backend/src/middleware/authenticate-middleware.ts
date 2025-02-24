import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

export function authMiddleware(req: any, res: any, next: any) {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(400).send({ error: "Token no provided" });
  }

  const [schema, token] = authHeader.split(" ");

  if (!token || schema !== "Bearer") {
    return res.status(401).send({ error: "Token malformatted or missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTSecret as string);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).send({ error: "Token invalid/expired" });
  }
}
