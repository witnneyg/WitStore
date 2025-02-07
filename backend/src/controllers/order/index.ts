import { Router } from "express";
import { CreateOrderController } from "./createOrder.js";
import { CreateOrderRepository } from "../../repositories/order/createOrder.js";
import { GetOrderRepository } from "../../repositories/order/getOrder.js";
import { GetOrderController } from "./getOrder.js";

const router = Router();

router.post("/createOrder", async (req, res) => {
  const { cartProduct, userId } = req.body;

  const createOrderRepository = new CreateOrderRepository();

  const createOrderController = new CreateOrderController(
    createOrderRepository
  );

  const { body, statusCode } = await createOrderController.handle({
    body: { cartProduct, userId },
  });

  res.status(statusCode).send(body);
});

router.get("/getOrder", async (req, res) => {
  const userId = req.query.userId as string;

  const getOrderRepository = new GetOrderRepository();

  const getOrderController = new GetOrderController(getOrderRepository);

  const { body, statusCode } = await getOrderController.handle({
    params: { userId },
  });

  res.status(statusCode).send(body);
});

export default router;
