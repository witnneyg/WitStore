import {
  IUserLogin,
  IUserLoginRepository,
} from "../../controllers/login/protocols.js";
import { IUser, User } from "../../models/userSchema.js";

export class UserLoginRepository implements IUserLoginRepository {
  async userLogin(body: IUserLogin): Promise<IUser> {
    const { email } = body;

    const user = await User.findOne({ email }).select("+password");

    return user;
  }
}
