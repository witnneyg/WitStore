import { Router } from "express";
import { UserLoginController } from "./userLogin.js";
import { UserLoginRepository } from "../../repositories/login/userLogin.js";
const router = Router();

router.post("/login", async (req, res) => {
  const userLoginRepository = new UserLoginRepository();

  const userLoginController = new UserLoginController(userLoginRepository);

  const { body, statusCode } = await userLoginController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export default router;
