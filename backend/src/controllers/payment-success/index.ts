import express from "express";
import { Router } from "express";
import { PaymentSuccessController } from "./paymentSuccess.js";
import { PaymentSuccessRepository } from "../../repositories/payment-success/handlePaymentSuccess.js";

const router = Router();

router.post(
  "/",
  express.json({ type: "application/json" }),
  async (req, res) => {
    const paymentSuccessRepository = new PaymentSuccessRepository();

    const paymentSuccessController = new PaymentSuccessController(
      paymentSuccessRepository
    );

    const { body, statusCode } = await paymentSuccessController.handle({
      headers: req.headers,
      body: req.body,
    });

    res.status(statusCode).send(body);
  }
);

export default router;
