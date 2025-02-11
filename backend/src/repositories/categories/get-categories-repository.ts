import { IGetCategoriesRepository } from "../../controllers/category/protocols.js";
import { Category, ICategory } from "../../models/categorySchema.js";

export class GetCategoriesRepository implements IGetCategoriesRepository {
  async getCategories(): Promise<ICategory[]> {
    const category = await Category.find<ICategory>().populate("products");

    return category;
  }
}
