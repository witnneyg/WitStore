import {
  IUpdateProductParams,
  IUpdateProductRepository,
  ProductsParams,
} from "../../controllers/dashboard/protocols.js";
import { Product } from "../../models/productSchema.js";

export class UpdateProductRepository implements IUpdateProductRepository {
  async updateProduct({
    productId,
    name,
    basePrice,
  }: IUpdateProductParams): Promise<ProductsParams> {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, basePrice },
      { new: true }
    );

    if (!updatedProduct) {
      throw new Error("Product not found");
    }

    return updatedProduct;
  }
}
