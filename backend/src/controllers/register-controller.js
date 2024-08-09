import { Router } from "express";
import { registerUser } from "../services/register-service.js";
import { generateToken } from "../utils/jwt.js";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const user = await registerUser(req.body);

    user.password = undefined;

    if (user.error) {
      return res.status(409).send({ error: user.error });
    }

    const token = generateToken(user);

    console.log({ token });
    return res.status(200).send({ user, token });
  } catch (error) {
    return res.status(400).send(error);
  }
});

export default router;
