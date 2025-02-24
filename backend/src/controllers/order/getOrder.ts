import { IOrder } from "../../models/orderSchema.js";
import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { IGetOrderRepository } from "./protocols.js";

export class GetOrderController implements IController {
  constructor(private readonly getOrderRepository: IGetOrderRepository) {}
  async handle(
    httpRequest: HttpRequest<{ userId: string }>
  ): Promise<HttpResponse<IOrder[] | string>> {
    try {
      const { userId } = httpRequest.params ?? {};

      if (!userId) {
        return {
          statusCode: 400,
          body: "User ID is required",
        };
      }
      const order = await this.getOrderRepository.getOrder(userId);

      return {
        statusCode: 200,
        body: order,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
