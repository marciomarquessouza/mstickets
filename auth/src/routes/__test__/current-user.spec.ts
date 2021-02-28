import request from "supertest";
import app from "../../config/app";
import { signUpForTests } from "../../helpers";

describe("#/api/users/currentuser", () => {
  describe("when request the current user", () => {
    it("returns the current user data", async () => {
      const cookie = await signUpForTests();

      const response = await request(app)
        .get("/api/users/currentuser")
        .set("Cookie", cookie)
        .send()
        .expect(200);

      expect(response.body.currentUser.email).toEqual("test@test.com");
    });
  });

  describe("when request the current user, but it is not authorized", () => {
    it("returns 401", async () => {
      const response = await request(app)
        .get("/api/users/currentuser")
        .send()
        .expect(401);
    });
  });
});
