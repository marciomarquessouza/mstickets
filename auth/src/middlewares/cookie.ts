import session from "cookie-session";

export const cookieSession = session({
  signed: false,
  secure: true,
});
