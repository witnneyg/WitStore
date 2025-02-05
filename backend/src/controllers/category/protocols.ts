import { ICategory } from "../../models/categorySchema.js";

export interface IGetCategoriesRepository {
  getCategories(): Promise<ICategory[]>;
}

export interface IGetCategoriesBySlugRepository {
  getCategoriesBySlug(slug: string): Promise<ICategory>;
}

export interface IGetCategoriesByIdRepository {
  getCategoriesById(id: string): Promise<ICategory>;
}
