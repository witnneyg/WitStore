import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { IUpdateProductRepository, ProductsParams } from "./protocols.js";

export class UpdateProductController implements IController {
  constructor(
    private readonly updateProductRepository: IUpdateProductRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<
      { productId: string },
      { name: string; basePrice: number }
    >
  ): Promise<HttpResponse<ProductsParams | string>> {
    try {
      const { productId } = httpRequest.params ?? {};
      const { name, basePrice } = httpRequest.body ?? {};

      if (!productId || !name || basePrice === undefined) {
        const missingFields = [];

        if (!productId) missingFields.push("productId");
        if (!name) missingFields.push("name");
        if (basePrice === undefined) missingFields.push("basePrice");

        return {
          statusCode: 400,
          body: `Missing required fields: ${missingFields.join(", ")}`,
        };
      }

      const product = await this.updateProductRepository.updateProduct({
        productId,
        name,
        basePrice,
      });

      if (!product) {
        return {
          statusCode: 404,
          body: "Product not found.",
        };
      }

      return {
        statusCode: 201,
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
