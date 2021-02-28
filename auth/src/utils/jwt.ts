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
    process.env.JWT_KEY || "my_secret"
  );
}

export function verifyJwt<T>({ token }: IVerifyJwt): T {
  const payload: any = jwt.verify(token, process.env.JWT_KEY || "my_secret");
  return payload;
}
