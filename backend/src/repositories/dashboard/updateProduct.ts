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
    return await Product.findByIdAndUpdate(
      productId,
      { name, basePrice },
      { new: true }
    );
  }
}
