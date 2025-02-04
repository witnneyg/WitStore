import { IController } from "../protocols.js";
import { IGetCategoriesRepository } from "./protocols.js";

export class GetCategoriesController implements IController {
  constructor(
    private readonly getCategoriesRepository: IGetCategoriesRepository
  ) {}

  async handle() {
    try {
      const categories = await this.getCategoriesRepository.getCategories();

      return {
        statusCode: 200,
        body: categories,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
