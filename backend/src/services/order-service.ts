// import { MongoClient } from "../database/mongo.js";
// import { OrderProduct } from "../models/orderProductSchema.js";
// import { Order } from "../models/orderSchema.js";

// export async function createOrder(cartProduct, userId) {
//   await MongoClient.connect();

//   {
//   }

// try {
//   const orderProducts = await OrderProduct.insertMany(
//     cartProduct.map((product) => ({
//       productId: product.id,
//       basePrice: product.basePrice,
//       discountPercentage: product.discountPercentage,
//       quantity: product.quantity,
//     }))
//   );

//   const order = await Order.create({
//     userId,
//     status: "WAITING_FOR_PAYMENT",
//     orderProducts: orderProducts.map((op) => op._id),
//   });

//   return { order };
// } catch (error) {
//   throw new Error("Error ao criar pedido: " + error.message);
// }
// }

// export async function getOrderByUserId(userId) {
//   return await Order.find({ userId })
//     .sort({ createdAt: -1 })
//     .populate({
//       path: "orderProducts",
//       populate: {
//         path: "productId",
//         select: "name description imageUrls",
//       },
//     });
// }
