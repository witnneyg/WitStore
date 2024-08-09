import { Router } from "express";
import { getUser } from "../services/login-service.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUser(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: "Email or password wrong" });
    }

    user.password = undefined;

    const token = generateToken(user);

    res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
