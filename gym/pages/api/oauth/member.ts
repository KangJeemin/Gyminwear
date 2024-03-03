import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'
import { getIronSession } from "iron-session";
import {getCookieValue,decodeToken} from '@/lib/useJwt'
import {
  defaultSession,
  sessionOptions,
  sleep,
  SessionData,
} from "@/lib/config/iron-config";

const db = require('@/lib/connectMysql');
type result ={
  fieldCount: number
  affectedRows: number,
  insertId: number,
  info: string,
  serverStatus: number,
  warningStatus: number,
  changedRows: number
}


export default async function member(request: NextApiRequest, response: NextApiResponse) {
  const cookies = request.headers.cookie;
  
  if(cookies){
    const token:string[] = cookies.split('=');
    const { url } = await decodeToken(token[1])
    if(!url){
      return alert("올바른 경로로 접근해주세요")
    }

  }
  else{
    return alert("올바른 경로로 접근해주세요")
  }
    
  

    const {email,nickname,oauth} = request.body
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
    if(request.method==="POST"){
      try{
        db.query(
            `INSERT INTO users (email, nickname, auth) VALUES ('${email}','${nickname}','${oauth}');`
        ,async(error:Error,result:result)=>{
            if(error){
                console.error("로그인하기위한 데이터베이스에 정보 조회중 오류 발생")
                alert("사용자 정보 조회중 오류 발생, 관리자에게 문의 하세요")
                response.redirect(403,`${process.env.NEXT_PUBLIC_IP}`)
                return false
            } 
              if(result){
                  session.email = email as string;
                  session.nickname =nickname as string;
                  session.isLoggedIn = true;
                  session.auth= oauth
                  await session.save();
                  await sleep(250);
                  // 여기서 redirect 안됨
                  response.status(200).json(true)
                  return 
              }
              else{
                  response.redirect(`${process.env.NEXT_PUBLIC_IP}/login`);  
                  alert("회원가입중 에러가 발생했습니다. 다시 시도해주세요. (문제가 계속될 경우 관리자에게 문의하여 주십시오)")
                  return response.status(500).json(false);

              }
        })
      }
      catch (error) {
        console.error("데이터 베이스에 유저 정보 저장 중 에러 발생")
        alert("사용자 정보 입력중 오류 발생, 관리자에게 문의 하세요")
        response.redirect(403,`${process.env.NEXT_PUBLIC_IP}`)
      }
    }
        
    }
