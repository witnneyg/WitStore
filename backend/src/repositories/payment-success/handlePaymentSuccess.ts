import Stripe from "stripe";
import { IPaymentSuccessRepository } from "../../controllers/payment-success/protocols.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-11-20.acacia",
});

export class PaymentSuccessRepository implements IPaymentSuccessRepository {
  async handlePaymentSuccess(
    signature: string,
    body: any
  ): Promise<Stripe.LineItem[] | null> {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET_KEY
    );
    if (event.type === "checkout.session.completed") {
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        }
      );
      const lineItems = sessionWithLineItems.line_items.data;

      return lineItems;
    }
  }
}
