import { SessionOptions } from "iron-session";

export interface SessionData {
  username: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  username: "",
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.NEXT_PUBLIC_IRON_SESSION_PASSWORD as string,
  cookieName: 'iron-session/examples/next.js',
  // cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    // secure: true,
  // },
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}