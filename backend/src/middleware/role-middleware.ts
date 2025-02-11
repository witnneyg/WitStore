export function roleMiddlware(requiredRole: string) {
  return (req, res, next) => {
    const { role } = req.user;

    if (role !== requiredRole) {
      return res.status(403).send({ error: "Forbidden: Access denied" });
    }

    next();
  };
}
