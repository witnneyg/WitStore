import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { IDeleteProductRepository, ProductsParams } from "./protocols.js";

export class DeleteProductController implements IController {
  constructor(
    private readonly deleteProductRepository: IDeleteProductRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<{ id: string }>
  ): Promise<HttpResponse<ProductsParams | string>> {
    try {
      const { id } = httpRequest.params ?? {};

      if (!id) {
        return {
          statusCode: 400,
          body: "Id is missing",
        };
      }

      await this.deleteProductRepository.deleteProduct(id);

      return {
        statusCode: 204,
        body: "Product deleted successfully",
      };
    } catch (error) {
      if (error instanceof Error && error.message === "PRODUCT_NOT_FOUND") {
        return {
          statusCode: 404,
          body: "Product not found",
        };
      }
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
