import { Request, Response, NextFunction } from "express";

export function roleMiddlware(requiredRole: string) {
  return (req: any, res: any, next: any) => {
    const { role } = req.user;

    if (role !== requiredRole) {
      return res.status(403).send({ error: "Forbidden: Access denied" });
    }

    next();
  };
}
