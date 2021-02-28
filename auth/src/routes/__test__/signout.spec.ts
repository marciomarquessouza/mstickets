import request from "supertest";
import app from "../../config/app";

describe("# /api/users/signout", () => {
  describe("when request the Sign Out", () => {
    it("clears the cookie after signing out", async () => {
      await request(app)
        .post("/api/users/signup")
        .send({
          email: "test@test.com",
          password: "password",
          phone: 5519998385035,
        })
        .expect(201);

      const response = await request(app)
        .post("/api/users/signout")
        .send({})
        .expect(200);

      expect(response.get("Set-Cookie")[0]).toEqual(
        "express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
      );
    });
  });
});
