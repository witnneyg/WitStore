import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { ProductsParams, ICreateProductRepository } from "./protocols.js";

interface RequestBody {
  name: string;
  description: string;
  basePrice: number;
  categoryName: string;
}

export class CreateProductController implements IController {
  constructor(
    private readonly createProductRepository: ICreateProductRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<{ body: RequestBody }>
  ): Promise<HttpResponse<ProductsParams | string>> {
    try {
      const protocol = httpRequest.headers?.["x-forwarded-proto"] || "http";
      const host = httpRequest.headers?.host || "localhost:8888";

      const { name, description, basePrice, categoryName } = httpRequest.body;

      if (!name || !description || !basePrice || !categoryName) {
        return {
          statusCode: 400,
          body: "All fields are required",
        };
      }

      if (!httpRequest.file) {
        return {
          statusCode: 400,
          body: "Image is required",
        };
      }

      const categoryData = await this.createProductRepository.getCategoryByName(
        categoryName
      );

      const categoryId = (categoryData as { _id: string })._id.toString();

      if (!categoryData) {
        return {
          statusCode: 404,
          body: "Category not found",
        };
      }

      const imageUrls: string[] = httpRequest.file
        ? [`${protocol}://${host}/uploads/${httpRequest.file.filename}`]
        : [];

      const slug = name
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();

      const product = await this.createProductRepository.createProduct({
        name,
        slug,
        description,
        basePrice,
        categoryId,
        imageUrls,
      });

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
