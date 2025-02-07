import { IUpdateOrderStatusRepository } from "../../controllers/order/protocols.js";
import { Order } from "../../models/orderSchema.js";

export class UpdateOrderStatusRepository
  implements IUpdateOrderStatusRepository
{
  async updateOrderStatus(orderId: string) {
    const order = await Order.findByIdAndUpdate(
      orderId,
      {
        status: "PAYMENT_CONFIRMED",
      },
      {
        new: true,
      }
    );

    return order;
  }
}
