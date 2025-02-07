import { IOrderProduct } from "../../models/orderProductSchema.js";
import { IOrder } from "../../models/orderSchema.js";

export interface ICreateOrderRepository {
  createOrder(cartProduct: IOrderProduct[], userId: string): Promise<IOrder>;
}

export interface IGetOrderRepository {
  getOrder(userId: string): Promise<IOrder[]>;
}

export interface IUpdateOrderStatusRepository {
  updateOrderStatus(orderId: string): Promise<IOrder[]>;
}
