import { NextApiRequest, NextApiResponse } from 'next';
import { getIronSession } from "iron-session";
import {
  defaultSession,
  SessionData,
  sessionOptions,
} from "@/lib/config/iron-config";
export default async function logout(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const session = await getIronSession<SessionData>(
        req,
        res,
        sessionOptions,
      );
        session.isLoggedIn=false;
        session.email=""
        session.destroy();
        console.log("쿠기파괴")
        return res.json(defaultSession);
}
}