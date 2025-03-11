import { Router } from "express";
import { StripeCheckoutController } from "./stripeCheckout.js";
import { StripeCheckoutRepository } from "../../repositories/checkout/stripeCheckout.js";

const router = Router();

router.post("/", async (req, res) => {
  const { products, orderId } = req.body;

  const stripeCheckoutRepository = new StripeCheckoutRepository();

  const stripeCheckoutController = new StripeCheckoutController(
    stripeCheckoutRepository
  );

  const { body, statusCode } = await stripeCheckoutController.handle({
    body: { products, orderId },
  });

  res.status(statusCode).send(body);
});

export default router;
