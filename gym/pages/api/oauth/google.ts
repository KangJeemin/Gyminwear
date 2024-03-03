import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'
import { getIronSession } from "iron-session";
import {
  defaultSession,
  sessionOptions,
  sleep,
  SessionData,
} from "@/lib/config/iron-config";
import {accessToken} from "@/lib/useJwt";
import { cookies } from 'next/headers'
interface email {
    email:string
    nickname:string
}

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v2/userinfo'
const GOOGLE_SIGNUP_REDIRECT_URI = 'http://localhost:3000/api/oauth/google'
const db = require('@/lib/connectMysql');


export default async function google(request: NextApiRequest, response: NextApiResponse) {
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
    
    const {code}=request.query;
    const res = await axios.post(GOOGLE_TOKEN_URL, {
        // x-www-form-urlencoded(body)
        code,
        client_id: process.env.NEXT_PUBLIC_Google_OAuth_Client_Id,
        client_secret: process.env.NEXT_PUBLIC_Google_OAuth_Client_Password,
        redirect_uri: GOOGLE_SIGNUP_REDIRECT_URI,
        grant_type: 'authorization_code',
    });
    
    const res2 = await axios.get(GOOGLE_USERINFO_URL,{
        headers:{
            Authorization:`Bearer ${res.data.access_token}`,
        },  
    })
    
    //토큰으로부터 OAUTH 정보 받아왔을떄 실행.
    if(res2.data.verified_email){
        try{
            db.query(
                `SELECT nickname FROM users WHERE email='${res2.data.email}' AND auth='google'; `
            ,async(error:Error,result:Array<email>)=>{
                if(error){
                    console.error("로그인하기위한 데이터베이스에 정보 조회중 오류 발생")
                    alert("사용자 정보 조회중 오류 발생, 관리자에게 문의 하세요")
                    response.redirect(403,`${process.env.NEXT_PUBLIC_IP}`)
                    return false
                } else{
                    // 데이스 접근은 되지만 조회 결과가 없는 경우. 즉 일치하는 회원정보가 있으면 실행
                    if(result.length!==0){
                        console.log('result=',result)
                        session.email = res2.data.email;
                        session.isLoggedIn = true;
                        session.nickname = result[0].nickname;
                        session.auth= "google"
                        await session.save();
                        await sleep(250);
                        //Return 안 넣어주면 리다이렉트 안됨
                        // 어디로 리다이렉트 해줘야하지?
                        return response.redirect(307,`${process.env.NEXT_PUBLIC_IP}`)
                    }
                    else{
                        //회원정보 없으면 닉네임 설정 페이지로 이동 
                        const urlToken = accessToken()
                        // 쿠키 삭제하는 코드
                        // response.setHeader('Set-Cookie', `urlToken=${urlToken}; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
                        response.setHeader('Set-Cookie', `urlToken=${urlToken}; Path=/;`);
                        return response.redirect(307,`${process.env.NEXT_PUBLIC_IP}/login/nickname?email=${res2.data.email}&oauth=google`,)
                        
                    }
                }
            })
          }
          catch (error) {
            console.error("데이터 베이스에 유저 정보 저장 중 에러 발생")
            alert("사용자 정보 조회중 오류 발생, 관리자에게 문의 하세요")
            response.redirect(403,`${process.env.NEXT_PUBLIC_IP}`)
          }
    }
}
