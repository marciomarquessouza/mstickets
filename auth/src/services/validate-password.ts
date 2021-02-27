import { SignInUserDto } from "../dtos";
import * as bcrypt from "bcrypt";
import { findUser } from "./find-user";
import { ServerError } from "../errors/server-error";

export async function validatePassword(
  signInUserDto: SignInUserDto
): Promise<boolean> {
  try {
    const { email, password: suppliedPassword } = signInUserDto;
    const { password } = await findUser(email);
    const isPasswordValid = await bcrypt.compare(suppliedPassword, password);
    return isPasswordValid;
  } catch (error) {
    throw new ServerError();
  }
}
