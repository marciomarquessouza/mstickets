import { SignUpCredentialsDto } from "../dtos";
import { createJwt } from "../utils";
import { createUser } from "../repository";

export const signUpService = async (
  signUpCredentialsDto: SignUpCredentialsDto
): Promise<string> => {
  const { id, email } = await createUser(signUpCredentialsDto);

  console.log(`Signing up a new user: ${email}`);

  const jwt = createJwt({ id, email });

  return jwt;
};
