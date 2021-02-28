import { User } from "../models";
import { IUser } from "../models";

export async function findUser(email: string): Promise<IUser> {
  return await User.findOne({ email });
}
