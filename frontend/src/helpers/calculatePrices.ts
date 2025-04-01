import { computeProductTotalPrice } from "./computeProductTotalPrice";
import { OrderProducts } from "@/pages/orders";
import { CartProduct } from "@/context/cart-context";

export function calculatePrices(products: (CartProduct | OrderProducts)[]): {
  subtotal: number;
  total: number;
  totalDiscount: number;
} {
  const subtotal = products.reduce(
    (acc, product) => acc + product.basePrice * product.quantity,
    0
  );

  const total = products.reduce((acc, product) => {
    const productWithTotalPrice =
      "totalPrice" in product ? product : computeProductTotalPrice(product);
    return acc + productWithTotalPrice.totalPrice * product.quantity;
  }, 0);

  const totalDiscount = subtotal - total;

  return { subtotal, total, totalDiscount };
}
