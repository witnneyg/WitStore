import {
  CreateProductsParams,
  ICreateProductRepository,
} from "../../controllers/dashboard/protocols.js";
import { Category, ICategory } from "../../models/categorySchema.js";
import { Product } from "../../models/productSchema.js";

export class CreateProductRepository implements ICreateProductRepository {
  async getCategoryByName(name: string): Promise<ICategory> {
    const category = await Category.findOne({ name });
    return category;
  }

  async createProduct(
    product: CreateProductsParams
  ): Promise<CreateProductsParams> {
    const newProduct = new Product(product);
    await newProduct.save();

    await Category.findByIdAndUpdate(product.categoryId, {
      $push: { products: newProduct._id },
    });

    return newProduct;
  }
}
