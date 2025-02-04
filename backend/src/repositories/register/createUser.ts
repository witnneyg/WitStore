import {
  ICreateUser,
  ICreateUserRepository,
} from "../../controllers/register/protocols.js";
import { IUser, User } from "../../models/userSchema.js";

export class CreateUserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUser): Promise<IUser> {
    const { email } = params;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("Email already exists");
    }

    const user = await User.create(params);

    return user;
  }
}
