import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { IStripeCheckoutRepository } from "./protocols.js";

export class StripeCheckoutController implements IController {
  constructor(
    private readonly stripeCheckoutRepository: IStripeCheckoutRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<unknown>
  ): Promise<HttpResponse<unknown>> {
    try {
      const { products, orderId } = httpRequest.body;

      const checkout =
        await this.stripeCheckoutRepository.createCheckoutSession(
          products,
          orderId
        );

      return {
        statusCode: 200,
        body: checkout,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
