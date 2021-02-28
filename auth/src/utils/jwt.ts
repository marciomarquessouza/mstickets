import jwt from "jsonwebtoken";

interface ICreateJwt {
  id: string;
  email: string;
}

export function createJwt({ id, email }: ICreateJwt): string {
  return jwt.sign(
    {
      id,
      email,
    },
    process.env.JWT_KEY!
  );
}
