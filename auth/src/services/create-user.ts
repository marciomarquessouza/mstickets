import { User } from "../models";
import { DatabaseError } from "../errors";
import { SignUpUserDto } from "../dtos";
import { hashPassword } from "./hash-password";
import * as bcrypt from "bcrypt";

export const createUser = async (
  signUpUserDto: SignUpUserDto
): Promise<SignUpUserDto> => {
  try {
    const { email, phone, password } = signUpUserDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await hashPassword(password, salt);
    const newUser: SignUpUserDto = await User.create({
      email,
      password: hashedPassword,
      phone,
    });
    return newUser;
  } catch (error) {
    throw new DatabaseError("Unexpected error to create a new user");
  }
};
