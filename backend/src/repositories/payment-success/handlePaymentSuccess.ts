import Stripe from "stripe";
import { IPaymentSuccessRepository } from "../../controllers/payment-success/protocols.js";
import { Order } from "../../models/orderSchema.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
});

export class PaymentSuccessRepository implements IPaymentSuccessRepository {
  async handlePaymentSuccess(
    signature: string,
    body: any
  ): Promise<Stripe.LineItem[] | null> {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET_KEY as string
    );
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        }
      );

      if (!sessionWithLineItems.line_items) {
        throw new Error("Line items not found in session");
      }

      const lineItems = sessionWithLineItems.line_items.data;

      if (!session.metadata || !session.metadata.orderId) {
        throw new Error("Order ID not found in session metadata");
      }

      await Order.findByIdAndUpdate(
        session.metadata.orderId,
        {
          status: "PAYMENT_CONFIRMED",
        },
        {
          new: true,
        }
      );

      return lineItems;
    }
    return null;
  }
}
