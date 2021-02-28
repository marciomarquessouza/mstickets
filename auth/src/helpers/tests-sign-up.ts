import request from "supertest";
import { SignUpCredentialsDto } from "../dtos";
import app from "../config/app";

const userDefault: SignUpCredentialsDto = {
  email: "test@test.com",
  password: "secret",
  phone: 5519998385035,
};

export async function signUpForTests(signUpCredentialsDto = userDefault) {
  const response = await request(app)
    .post("/api/users/signup")
    .send(signUpCredentialsDto)
    .expect(201);

  const cookie = response.get("Set-Cookie");

  return cookie;
}
