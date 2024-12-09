import { Router } from "express";
import { createOrder, getOrderByUserId } from "../services/order-service.js";

const router = Router();

router.post("/createOrder", async (req, res) => {
  try {
    const { cartProduct, userId } = req.body;

    const order = await createOrder(cartProduct, userId);

    res.status(201).send(order);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.get("/getOrder", async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).send({ message: "User ID is required" });
    }
    const order = await getOrderByUserId(userId);

    res.status(200).send(order);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

export default router;
