import { User, IUser } from "../models";
import { DatabaseError } from "../errors";
import { SignUpCredentialsDto } from "../dtos";
import { hash } from "../utils";
import * as bcrypt from "bcrypt";

export const createUser = async (
  signUpCredentialsDto: SignUpCredentialsDto
): Promise<IUser> => {
  try {
    const { email, phone, password } = signUpCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await hash({ value: password, salt });
    const newUser: IUser = await User.create({
      email,
      password: hashedPassword,
      phone,
    });
    return newUser;
  } catch (error) {
    throw new DatabaseError("Unexpected error to create a new user");
  }
};
