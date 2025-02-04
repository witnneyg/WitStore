import { IProduct } from "../../models/productSchema.js";

export interface IGetProductRepository {
  getProduct(): Promise<IProduct[]>;
}

export interface IGetProductBySlugRepository {
  getProductBySlug(slug: string): Promise<IProduct>;
}
