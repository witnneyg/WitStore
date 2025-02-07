import { IGetOrderRepository } from "../../controllers/order/protocols.js";
import { IOrder, Order } from "../../models/orderSchema.js";

export class GetOrderRepository implements IGetOrderRepository {
  async getOrder(userId: string): Promise<IOrder[]> {
    const order = await Order.find({ userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "orderProducts",
        populate: {
          path: "productId",
          select: "name description imageUrls",
        },
      });

    return order;
  }
}
