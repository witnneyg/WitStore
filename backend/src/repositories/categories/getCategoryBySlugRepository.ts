import { IGetCategoriesBySlugRepository } from "../../controllers/category/protocols.js";
import { Category, ICategory } from "../../models/categorySchema.js";

export class GetCategoryBySlugRepository
  implements IGetCategoriesBySlugRepository
{
  async getCategoriesBySlug(slug: string): Promise<ICategory> {
    const getCategoryBySlug = await Category.findOne({ slug }).populate(
      "products"
    );

    return getCategoryBySlug;
  }
}
