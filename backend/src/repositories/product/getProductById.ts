import { IGetProductBySlugRepository } from "../../controllers/product/protocols.js";
import { IProduct, Product } from "../../models/productSchema.js";

export class GetProductBySlugRepository implements IGetProductBySlugRepository {
  async getProductBySlug(slug: string): Promise<IProduct> {
    const product = await Product.findOne({ slug: slug });

    return product;
  }
}
