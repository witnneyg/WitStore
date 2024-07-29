import { Product } from "@/lib/utils";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export function computeProductTotalPrice(product: Product) {
  if (product.discountPercentage == 0) {
    return {
      ...product,
      totalPrice: product.basePrice,
    };
  }

  const totalDiscount = product.basePrice * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice: product.basePrice - totalDiscount,
  };
}
