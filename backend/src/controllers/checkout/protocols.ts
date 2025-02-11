import Stripe from "stripe";

export interface Products {
  name: string;
  description: string;
  slug: string;
  basePrice: number;
  categoryId: string;
  discountPercentage: number;
  imageUrls: string[];
  quantity: number;
  totalPrice: number;
}

export interface IStripeCheckoutRepository {
  createCheckoutSession(
    products: Products[],
    orderId: string
  ): Promise<Stripe.Checkout.Session>;
}
