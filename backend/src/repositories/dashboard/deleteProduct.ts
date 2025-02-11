import {
  IDeleteProductRepository,
  ProductsParams,
} from "../../controllers/dashboard/protocols.js";
import { Category } from "../../models/categorySchema.js";
import { Product } from "../../models/productSchema.js";

export class DeleteProductRepository implements IDeleteProductRepository {
  async deleteProduct(id: string): Promise<void> {
    const product = await Product.findById(id);

    if (!product) {
      throw new Error("PRODUCT_NOT_FOUND");
    }

    await Product.findByIdAndDelete(id);

    await Category.findByIdAndUpdate(product.categoryId, {
      $pull: { products: id },
    });
  }
}
