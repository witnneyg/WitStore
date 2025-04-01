import { Product } from "@/lib/utils";
import { OrderProducts } from "@/pages/orders";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export interface OrderProductWithTotalPrice extends OrderProducts {
  totalPrice: number;
}

export function computeProductTotalPrice<T extends Product | OrderProducts>(
  product: T
): T & { totalPrice: number } {
  const basePrice = "basePrice" in product ? product.basePrice : 0;
  const discountPercentage =
    "discountPercentage" in product ? product.discountPercentage : 0;

  const totalDiscount = basePrice * (discountPercentage / 100);
  const totalPrice =
    discountPercentage === 0 ? basePrice : basePrice - totalDiscount;

  return {
    ...product,
    totalPrice,
  };
}
