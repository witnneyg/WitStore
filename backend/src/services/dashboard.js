import { Product } from "../models/models";

export async function updatedProductById(productId, name, basePrice) {
  databaseConnection();

  const updatedProduct = Product.findByIdAndUpdate(
    productId,
    { name, basePrice },
    { new: true }
  );

  return updatedProduct;
}
