import cookieSession from "cookie-session";

export const cookie = cookieSession({
  signed: false,
  secure: true,
});
