import { SessionOptions } from "iron-session";
import useSession from "@/lib/useSession";




export interface SessionData {
  email:string;
  nickname: string;
  isLoggedIn: boolean;
  remember:string;
}

export const defaultSession: SessionData = {
  email:"",
  nickname: "",
  isLoggedIn: false,
  remember:""
};

export const sessionOptions: SessionOptions = {
  
  password: process.env.NEXT_PUBLIC_IRON_SESSION_PASSWORD as string,
  cookieName: 'gyminwear',
  cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    // secure: true,
    
  },
  
  ttl: 60*2, // 세션 시간 기본 하루 설정
  
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}