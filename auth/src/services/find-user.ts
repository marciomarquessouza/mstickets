import { User } from "../models";
import { SignUpUserDto } from "../dtos";

export async function findUser(email: string): Promise<SignUpUserDto> {
  return await User.findOne({ email });
}
