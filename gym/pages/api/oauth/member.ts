import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'
import { getIronSession } from "iron-session";
import {
  defaultSession,
  sessionOptions,
  sleep,
  SessionData,
} from "@/lib/config/iron-config";
import { Console } from "console";
type email ={
    email:string
    nickname:string
}
const db = require('@/lib/connectMysql');


export default async function member(request: NextApiRequest, response: NextApiResponse) {
    const {email,nickname} = request.body
    //소셜 로그인의 쿠키 주기는 어떻게 해야하지? 히루?
    const modifiedSessionOptions = {
        ...sessionOptions,
        cookieOptions: {
          ...sessionOptions.cookieOptions,
          maxAge:60*60*24 ,
        },
      };
    const session = await getIronSession<SessionData>(
        request,
        response,
        modifiedSessionOptions,
      );    

    //토큰으로부터 OAUTH 정보 받아왔을떄 실행.
        try{
            db.query(
                `INSERT INTO users (email, nickname) VALUES ('${email}','${nickname}');`
            ,async(error:Error,result:Array<email>)=>{
                if(error){
                    console.error("로그인하기위한 데이터베이스에 정보 조회중 오류 발생")
                    alert("사용자 정보 조회중 오류 발생, 관리자에게 문의 하세요")
                    response.redirect(403,`${process.env.NEXT_PUBLIC_IP}`)
                    return false
                } else{
                    if(result){
                        session.email = email as string;
                        session.nickname =nickname as string;
                        session.auth= ""
                        await session.save();
                        await sleep(250);
                        return response.status(200).json(true);  
                        
                    }
                    else{
                        return response.status(200).json(false);  
                        
                        
                    }
                }
            })
          }
          catch (error) {
            console.error("데이터 베이스에 유저 정보 저장 중 에러 발생")
            alert("사용자 정보 입력중 오류 발생, 관리자에게 문의 하세요")
            response.redirect(403,`${process.env.NEXT_PUBLIC_IP}`)
          }
    }
