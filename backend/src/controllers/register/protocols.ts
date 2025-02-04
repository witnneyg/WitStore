import { IUser } from "../../models/userSchema.js";

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: ICreateUser): Promise<IUser>;
}
