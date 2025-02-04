import { ICategory } from "../../models/categorySchema.js";
import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { IGetCategoriesByIdRepository } from "./protocols.js";

export class GetCategoryByIdController implements IController {
  constructor(
    private readonly getCategoryByIdRepository: IGetCategoriesByIdRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<unknown>
  ): Promise<HttpResponse<unknown>> {
    try {
      const id = httpRequest.params;

      console.log(id);

      if (!id) {
        return {
          statusCode: 400,
          body: "Id is missing",
        };
      }

      const category = await this.getCategoryByIdRepository.getCategoriesById(
        id
      );

      if (!category) {
        return {
          statusCode: 400,
          body: "Category not found",
        };
      }

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
