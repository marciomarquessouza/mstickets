import { User } from "../models";
import { DatabaseError } from "../errors";
import { SignUpUserDto } from "../dtos";

export const createUser = async (
  user: SignUpUserDto
): Promise<SignUpUserDto> => {
  try {
    const newUser: SignUpUserDto = await User.create(user);
    return newUser;
  } catch (error) {
    throw new DatabaseError("Unexpected error to create a new user");
  }
};
