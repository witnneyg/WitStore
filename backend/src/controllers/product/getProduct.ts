import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { IGetProductRepository } from "./protocols.js";

export class GetProductController implements IController {
  constructor(private readonly getProductRepository: IGetProductRepository) {}

  async handle(): Promise<HttpResponse<unknown>> {
    try {
      const product = await this.getProductRepository.getProduct();

      if (!product) {
        return {
          statusCode: 400,
          body: "Product not found",
        };
      }
      return {
        statusCode: 200,
        body: product,
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: "Something went wrong",
      };
    }
  }
}
