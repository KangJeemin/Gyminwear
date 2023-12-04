import { NextApiRequest, NextApiResponse } from 'next';
import { getIronSession } from "iron-session";
import {
  defaultSession,
  SessionData,
  sessionOptions,
} from "@/lib/config/iron-config";
export default async function logout(req: NextApiRequest, res: NextApiResponse) {
    const session = await getIronSession<SessionData>(
        req,
        res,
        sessionOptions,
      );
  
        session.destroy();
    
        return res.json(defaultSession);
}