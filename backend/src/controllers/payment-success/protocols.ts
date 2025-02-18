import Stripe from "stripe";

export interface IPaymentSuccessRepository {
  handlePaymentSuccess(
    signature: string,
    body: any
  ): Promise<Stripe.LineItem[] | null>;
}
