import { Category, ICategory } from "../../models/categorySchema.js";
import { created } from "../helpers.js";
import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  IController,
} from "../protocols.js";
import {
  IGetCategoriesBySlugRepository,
  IGetCategoriesRepository,
} from "./protocols.js";

export class GetCategoryBySlugController implements IController {
  constructor(
    private readonly getCategoryBySlugRepository: IGetCategoriesBySlugRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<{ slug: string }>
  ): Promise<HttpResponse<ICategory | string>> {
    try {
      const { slug } = httpRequest.params ?? {};

      if (!slug) {
        return {
          statusCode: 400,
          body: "Slug is missing",
        };
      }

      const category =
        await this.getCategoryBySlugRepository.getCategoriesBySlug(slug);

      return {
        statusCode: 200,
        body: category,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
