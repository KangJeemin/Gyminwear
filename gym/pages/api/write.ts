import { NextApiRequest, NextApiResponse } from 'next';
import { getIronSession } from "iron-session";
import {
  defaultSession,
  sessionOptions,
  sleep,
  SessionData,
} from "@/lib/config/iron-config";
const db = require('@/lib/connectMysql');


type writeInfo = {  
    
}
export default async function write(req: NextApiRequest, res: NextApiResponse) {

}