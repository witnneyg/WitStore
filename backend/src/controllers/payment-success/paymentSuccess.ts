import dotenv from "dotenv";
import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { IPaymentSuccessRepository } from "./protocols.js";

dotenv.config();
export class PaymentSuccessController implements IController {
  constructor(
    private readonly paymentSuccessRepository: IPaymentSuccessRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<unknown>
  ): Promise<HttpResponse<unknown>> {
    try {
      const signature = httpRequest.headers["stripe-signature"];

      if (!signature) {
        return { statusCode: 400, body: "Stripe signature missing" };
      }

      const paymentSuccess =
        await this.paymentSuccessRepository.handlePaymentSuccess(
          signature,
          httpRequest.body
        );

      if (!paymentSuccess) {
        return { statusCode: 400, body: { error: "Invalid event type" } };
      }

      return {
        statusCode: 200,
        body: { received: true, data: paymentSuccess },
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
