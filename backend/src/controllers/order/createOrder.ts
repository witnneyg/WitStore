import { IOrderProduct } from "../../models/orderProductSchema.js";
import { IOrder } from "../../models/orderSchema.js";
import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { ICreateOrderRepository } from "./protocols.js";

interface CreateOrderRequestBody {
  cartProduct: IOrderProduct[];
  userId: string;
}
export class CreateOrderController implements IController {
  constructor(private readonly createOrderRepository: ICreateOrderRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateOrderRequestBody>
  ): Promise<HttpResponse<IOrder | string>> {
    try {
      const { cartProduct, userId } = httpRequest.body;

      if (
        !cartProduct ||
        !Array.isArray(cartProduct) ||
        cartProduct.length === 0
      ) {
        return {
          statusCode: 400,
          body: "Cart products must be an array and cannot be empty.",
        };
      }

      if (!userId) {
        return {
          statusCode: 400,
          body: "UserId is required.",
        };
      }

      for (const product of cartProduct) {
        if (
          !product.productId ||
          !product.basePrice ||
          !product.quantity ||
          !product.discountPercentage
        ) {
          return {
            statusCode: 400,
            body: "Each cart product must contain productId, basePrice, and quantity.",
          };
        }
      }

      const order = await this.createOrderRepository.createOrder(
        cartProduct,
        userId
      );

      return {
        statusCode: 201,
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
