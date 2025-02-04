import { Router } from "express";
import { CreateUserController } from "./createUser.js";
import { CreateUserRepository } from "../../repositories/register/createUser.js";

const router = Router();

router.post("/register", async (req, res) => {
  const createUserRepository = new CreateUserRepository();

  const createUserController = new CreateUserController(createUserRepository);

  const { body, statusCode } = await createUserController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export default router;
