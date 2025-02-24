import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { ICreateUser, ICreateUserRepository } from "./protocols.js";
import { generateToken } from "../../utils/jwt.js";
import { IUser } from "../../models/userSchema.js";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    HttpRequest: HttpRequest<ICreateUser>
  ): Promise<
    HttpResponse<{ user: Omit<IUser, "password">; token: string } | string>
  > {
    try {
      const body = HttpRequest.body;

      const user = await this.createUserRepository.createUser(body);

      const { password, ...userWithoutPassword } = user;

      const token = generateToken(user);

      return {
        statusCode: 201,
        body: { user: userWithoutPassword, token },
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
