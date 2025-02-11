import { ICategory } from "../../models/categorySchema.js";
import { IProduct } from "../../models/productSchema.js";

export interface IUpdateProductParams {
  productId: string;
  name: string;
  basePrice: number;
}

export interface ProductsParams {
  name: string;
  slug: string;
  description: string;
  basePrice: string;
  categoryId: string;
  imageUrls: string[];
}

export interface ICreateProductRepository {
  createProduct(products: ProductsParams): Promise<ProductsParams>;
  getCategoryByName(name: string): Promise<ICategory>;
}

export interface IUpdateProductRepository {
  updateProduct({
    productId,
    name,
    basePrice,
  }: IUpdateProductParams): Promise<ProductsParams>;
}

export interface IDeleteProductRepository {
  deleteProduct(id: string): Promise<void>;
}
