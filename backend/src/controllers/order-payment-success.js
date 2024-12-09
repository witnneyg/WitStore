import { config } from "dotenv";
import { Router } from "express";
import express from "express";
import Stripe from "stripe";
import { updateStatusOrder } from "../services/order-service.js";

config();
const router = Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-11-20.acacia",
});

router.post(
  "/",
  express.json({ type: "application/json" }),
  async (req, res) => {
    try {
      const signature = req.headers["stripe-signature"];

      const event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET_KEY
      );

      if (event.type === "checkout.session.completed") {
        const session = event.data.object;

        const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
          event.data.object.id,
          {
            expand: ["line_items"],
          }
        );

        const lineItems = sessionWithLineItems.line_items;

        await updateStatusOrder(session.metadata.orderId);
      }

      res.status(200).json({ received: true });
    } catch (error) {
      res.status(400).json({ error: `Webhook error. ${error}` });
    }
  }
);

export default router;
