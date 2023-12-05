import { NextApiRequest, NextApiResponse } from "next";
import { getIronSession } from "iron-session";
import {
  defaultSession,
  sessionOptions,
  sleep,
  SessionData,
} from "@/lib/config/iron-config";

// login
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
):Promise<SessionData> {
    return new Promise (async (resolve,reject)=>{
    const session = await getIronSession<SessionData>(
        request,
        response,
        sessionOptions,
          );
    resolve(session);   
    reject() 
    })
  
    
    
}
