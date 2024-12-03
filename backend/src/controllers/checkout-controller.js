import { Router } from "express";
import Stripe from "stripe";

const router = Router();

router.post("/", async (req, res) => {
  const products = req.body;

  const stripe = new Stripe(process.env.STRIP_SECRET_KEY, {
    apiVersion: "2024-11-20.acacia",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://localhost:5173",
    cancel_url: "http://localhost:5173",
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

  console.log(checkout);

  try {
    res.status(200).send({ checkout });
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar a compra. Por favor, tente novamente.",
    });
  }
});

export default router;
