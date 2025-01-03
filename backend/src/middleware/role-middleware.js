export function roleMiddlware(requiredRole) {
  return (req, res, next) => {
    if (!res.user) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    const { role } = req.user;

    if (role !== requiredRole) {
      return res.status(403).send({ error: "Forbidden: Access denied" });
    }

    next();
  };
}
