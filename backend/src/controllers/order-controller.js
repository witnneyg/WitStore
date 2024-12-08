import { Router } from "express";
import { createOrder } from "../services/order-service.js";

const router = Router();

router.post("/createOrder", async (req, res) => {
  try {
    const { cartProduct, user } = req.body;

    const order = await createOrder(cartProduct, user);

    res.status(201).send(order);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

export default router;
