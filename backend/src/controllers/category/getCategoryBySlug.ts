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
    httpRequest: HttpRequest<string>
  ): Promise<HttpResponse<ICategory | string>> {
    try {
      const slug = httpRequest.params;

      const category =
        await this.getCategoryBySlugRepository.getCategoriesBySlug(slug);

      console.log(category);
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
