import { IGetCategoriesByIdRepository } from "../../controllers/category/protocols.js";
import { Category, ICategory } from "../../models/categorySchema.js";

export class GetCategoryByIdRepository implements IGetCategoriesByIdRepository {
  async getCategoriesById(id: string): Promise<ICategory> {
    const category = await Category.findById(id).populate("products");

    return category;
  }
}
