import { SignInCredentialsDto } from "../dtos";
import * as bcrypt from "bcrypt";
import { findUser } from "../repository";
import { ServerError } from "../errors/server-error";
import { BadRequestError } from "../errors";
import { createJwt } from "../utils";

export async function signInService(
  signInCredentialsDto: SignInCredentialsDto
): Promise<string> {
  try {
    const { email, password: suppliedPassword } = signInCredentialsDto;
    const { id, password } = await findUser(email);
    const isPasswordValid = await bcrypt.compare(suppliedPassword, password);

    if (!isPasswordValid) {
      throw new BadRequestError("Invalid Credentials");
    }

    console.log(`Signing in the user: ${email}`);

    const jwt = createJwt({ id, email });

    return jwt;
  } catch (error) {
    throw new ServerError();
  }
}
