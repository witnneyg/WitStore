import { databaseConnection } from "../lib/database.js";
import { Order, OrderProduct } from "../models/models.js";
import mongoose from "mongoose";

export async function createOrder(cartProduct, user) {
  await databaseConnection();

  try {
    const orderProducts = await OrderProduct.insertMany(
      cartProduct.map((product) => ({
        productId: product.id,
        basePrice: product.basePrice,
        discountPercentage: product.discountPercentage,
        quantity: product.quantity,
      }))
    );

    const order = await Order.create({
      userId: user.id,
      status: "WAITING_FOR_PAYMENT",
      orderProducts: orderProducts.map((op) => op._id),
    });

    return { order };
  } catch (error) {
    throw new Error("Error ao criar pedido: " + error.message);
  }
}
