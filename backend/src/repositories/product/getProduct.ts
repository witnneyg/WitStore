import { IGetProductRepository } from "../../controllers/product/protocols.js";
import { IProduct, Product } from "../../models/productSchema.js";

export class GetProductRepository implements IGetProductRepository {
  async getProduct(): Promise<IProduct[]> {
    const product = await Product.find().populate("category");

    return product;
  }
}
