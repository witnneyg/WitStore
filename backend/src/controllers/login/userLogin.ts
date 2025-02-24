import { IUser } from "../../models/userSchema.js";
import { generateToken } from "../../utils/jwt.js";
import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import bcrypt from "bcrypt";
import { IUserLogin, IUserLoginRepository } from "./protocols.js";

export class UserLoginController implements IController {
  constructor(private readonly loginUserRepository: IUserLoginRepository) {}

  async handle(
    httpRequest: HttpRequest<{ password: string }>
  ): Promise<
    HttpResponse<{ user: Omit<IUser, "password">; token: string } | string>
  > {
    try {
      const passwordRequest = httpRequest.body.password;

      const user = await this.loginUserRepository.userLogin(httpRequest.body);

      if (!user || !(await bcrypt.compare(passwordRequest, user.password))) {
        return {
          statusCode: 400,
          body: "Email or password wrong",
        };
      }
      const { password, ...userWithoutPassword } = user;

      const token = generateToken(user);

      return {
        statusCode: 200,
        body: { user: userWithoutPassword, token },
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: "Something went wrong",
      };
    }
  }
}
