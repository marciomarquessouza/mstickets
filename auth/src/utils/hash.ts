import * as bcrypt from "bcrypt";

interface IHash {
  value: string;
  salt: string;
}

export async function hash({ value, salt }: IHash): Promise<string> {
  return bcrypt.hash(value, salt);
}
