import request from "supertest";
import app from "../../config/app";

describe("# /api/users/signin", () => {
  describe("when request a sign in with a existing user", () => {
    it("responds with status 200 (Ok) and receive a cookie", async () => {
      await request(app)
        .post("/api/users/signup")
        .send({
          email: "ginger.pie@chat.com",
          password: "secret",
          phone: 5519998385035,
        })
        .expect(201);

      const response = await request(app)
        .post("/api/users/signin")
        .send({
          email: "ginger.pie@chat.com",
          password: "secret",
        })
        .expect(200);

      expect(response.get("Set-Cookie")).toBeDefined();
    });
  });

  describe("when request a sign in with a not existing user", () => {
    it("responds with status 400 (Bad Request)", async () => {
      await request(app)
        .post("/api/users/signin")
        .send({
          email: "ginger.pie@chat.com",
          password: "secret",
        })
        .expect(400);
    });
  });

  describe("when request a sign in with a invalid email", () => {
    it("responds with status 400 (Bad Request)", async () => {
      await request(app)
        .post("/api/users/signin")
        .send({
          email: "not a email",
          password: "secret",
        })
        .expect(400);
    });
  });

  describe("when request a sign in with a invalid password", () => {
    it("responds with status 400 (Bad Request)", async () => {
      await request(app)
        .post("/api/users/signin")
        .send({
          email: "email@email",
          password: "s",
        })
        .expect(400);
    });
  });
});
