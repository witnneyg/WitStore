import { IUser } from "../../models/userSchema.js";
import { generateToken } from "../../utils/jwt.js";
import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import bcrypt from "bcrypt";
import { IUserLogin, IUserLoginRepository } from "./protocols.js";

export class UserLoginController implements IController {
  constructor(private readonly loginUserRepository: IUserLoginRepository) {}

  async handle(
    httpRequest: HttpRequest<IUserLogin>
  ): Promise<
    HttpResponse<{ user: Omit<IUser, "password">; token: string } | string>
  > {
    try {
      const { password } = httpRequest.body;

      const user = await this.loginUserRepository.userLogin(httpRequest.body);

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return {
          statusCode: 400,
          body: "Email or password wrong",
        };
      }
      user.password = undefined;

      const token = generateToken(user);

      return {
        statusCode: 200,
        body: { user, token },
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: "Something went wrong",
      };
    }
  }
}
