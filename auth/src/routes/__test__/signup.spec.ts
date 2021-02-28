import request from "supertest";
import app from "../../config/app";

describe("#SignUp Route", () => {
  describe("when request a new signUp with the corret credentials", () => {
    it("returns a 201 status (created", async () => {
      return request(app)
        .post("/api/users/signup")
        .send({
          email: "irisbell@twtest.com",
          password: "secret",
          phone: 5519998385035,
        })
        .expect(201);
    });
  });
});
