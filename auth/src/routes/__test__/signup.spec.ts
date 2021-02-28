import request from "supertest";
import app from "../../config/app";

describe("# /api/users/signup", () => {
  describe("when request a new sign up with the corret credentials", () => {
    it("returns a 201 status (created", async () => {
      await request(app)
        .post("/api/users/signup")
        .send({
          email: "irisbell@twtest.com",
          password: "secret",
          phone: 5519998385035,
        })
        .expect(201);
    });

    it("returns a cookie", async () => {
      const response = await request(app)
        .post("/api/users/signup")
        .send({
          email: "irisbell@twtest.com",
          password: "secret",
          phone: 5519998385035,
        })
        .expect(201);

      expect(response.get("Set-Cookie")).toBeDefined();
    });
  });

  describe("when request a new signUp with an invalid email", () => {
    it("returns a 400 status (BadRequest)", async () => {
      await request(app)
        .post("/api/users/signup")
        .send({
          email: "I'm a name, not a email",
          password: "secret",
          phone: 5519998385035,
        })
        .expect(400);
    });
  });

  describe("when request a new signUp with an invalid password", () => {
    it("returns a 400 status (BadRequest)", async () => {
      await request(app)
        .post("/api/users/signup")
        .send({
          email: "irisbell@twtest.com",
          password: "smal",
          phone: 5519998385035,
        })
        .expect(400);
    });
  });

  describe("when request a new signUp missing email and password", () => {
    it("returns a 400 status (BadRequest)", async () => {
      await request(app)
        .post("/api/users/signup")
        .send({
          phone: 5519998385035,
        })
        .expect(400);
    });
  });

  describe("when request a new signUp with an already used email", () => {
    it("returns a 400 status (BadRequest)", async () => {
      await request(app)
        .post("/api/users/signup")
        .send({
          email: "irisbell@twtest.com",
          password: "secret",
          phone: 5519998385035,
        })
        .expect(201);

      await request(app)
        .post("/api/users/signup")
        .send({
          email: "irisbell@twtest.com",
          password: "secret",
          phone: 5519998385035,
        })
        .expect(400);
    });
  });
});
