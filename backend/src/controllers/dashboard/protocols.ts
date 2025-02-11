import { ICategory } from "../../models/categorySchema.js";
import { IProduct } from "../../models/productSchema.js";

interface IUpdateProductParams {
  name: string;
  basePrice: number;
}

export interface CreateProductsParams {
  name: string;
  slug: string;
  description: string;
  basePrice: string;
  categoryId: string;
  imageUrls: string[];
}

export interface ICreateProductRepository {
  createProduct(products: CreateProductsParams): Promise<CreateProductsParams>;
  getCategoryByName(name: string): Promise<ICategory>;
}

export interface IUpdateProductRepository {
  updateProduct(products: IUpdateProductParams): Promise<IProduct>;
}

export interface IDeleteProductRepository {
  deleteProduct(id: string): Promise<IProduct>;
}
