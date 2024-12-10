import { Router } from "express";
import Stripe from "stripe";

const router = Router();

router.post("/", async (req, res) => {
  const { products, orderId } = req.body;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-11-20.acacia",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: process.env.HOST_URL,
    cancel_url: process.env.HOST_URL,
    metadata: {
      orderId,
    },
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          unit_amount: product.totalPrice * 100,
        },
        quantity: product.quantity,
      };
    }),
  });

  try {
    res.status(200).send({ checkout });
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar a compra. Por favor, tente novamente.",
    });
  }
});

export default router;
