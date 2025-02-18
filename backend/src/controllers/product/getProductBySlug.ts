import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { IGetProductBySlugRepository } from "./protocols.js";

export class GetProductBySlugController implements IController {
  constructor(
    private readonly getProductBySlugRepository: IGetProductBySlugRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<{ slug: string }>
  ): Promise<HttpResponse<unknown>> {
    try {
      const { slug } = httpRequest.params;

      const product = await this.getProductBySlugRepository.getProductBySlug(
        slug
      );

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
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
