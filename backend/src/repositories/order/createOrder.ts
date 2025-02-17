import { ICreateOrderRepository } from "../../controllers/order/protocols.js";
import {
  IOrderProduct,
  OrderProduct,
} from "../../models/orderProductSchema.js";
import { IOrder, Order } from "../../models/orderSchema.js";

export class CreateOrderRepository implements ICreateOrderRepository {
  async createOrder(
    cartProduct: IOrderProduct[],
    userId: string
  ): Promise<IOrder> {
    const orderProducts = await OrderProduct.insertMany(
      cartProduct.map((product) => ({
        productId: product.productId,
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

    return order;
  }
}
