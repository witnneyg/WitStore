import { databaseConnection } from "../lib/database.js";
import { Order, OrderProduct } from "../models/models.js";

export async function createOrder(cartProduct, userId) {
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
      userId,
      status: "WAITING_FOR_PAYMENT",
      orderProducts: orderProducts.map((op) => op._id),
    });

    return { order };
  } catch (error) {
    throw new Error("Error ao criar pedido: " + error.message);
  }
}

export async function updateStatusOrder(orderId) {
  await Order.findByIdAndUpdate(
    orderId,
    {
      status: "PAYMENT_CONFIRMED",
    },
    {
      new: true,
    }
  );
}

export async function getOrderByUserId(userId) {
  return await Order.find({ userId })
    .sort({ createdAt: -1 })
    .populate("orderProducts");
}
