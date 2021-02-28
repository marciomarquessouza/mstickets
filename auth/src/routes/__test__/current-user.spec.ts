import request from "supertest";
import app from "../../config/app";

describe("#/api/users/currentuser", () => {
  describe("when request the Sign Out", () => {
    it("clears the cookie after signing out", async () => {
      const authResponse = await request(app)
        .post("/api/users/signup")
        .send({
          email: "test@test.com",
          password: "password",
          phone: 5519998385035,
        })
        .expect(201);

      const cookie = authResponse.get("Set-Cookie");

      const response = await request(app)
        .get("/api/users/currentuser")
        .set("Cookie", cookie)
        .send()
        .expect(200);

      expect(response.body.currentUser.email).toEqual("test@test.com");
    });
  });
});
