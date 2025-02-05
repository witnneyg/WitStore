import { IUser } from "../../models/userSchema.js";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserLoginRepository {
  userLogin(body: IUserLogin): Promise<IUser>;
}
