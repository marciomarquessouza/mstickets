import jwt from "jsonwebtoken";

interface ICreateJwt {
  id: string;
  email: string;
}

interface IVerifyJwt {
  token: string;
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

export function verifyJwt({ token }: IVerifyJwt) {
  return jwt.verify(token, process.env.JWT_KEY!);
}
