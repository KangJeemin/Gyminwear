import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'
import { getIronSession } from "iron-session";
import {
  defaultSession,
  sessionOptions,
  sleep,
  SessionData,
} from "@/lib/config/iron-config";

interface email {
    email:string
    nickname:string
}

const naver_TOKEN_URL = 'https://nid.naver.com/oauth2.0/token';
const naver_USER_INFO = 'https://openapi.naver.com/v1/nid/me'
const naver_SIGNUP_REDIRECT_URI = 'http://localhost:3000/api/oauth/naver'
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
    const {code,state}=request.query;
    const res = await axios.get(`${naver_TOKEN_URL}?grant_type=authorization_code&code=${code}&state=${state}&client_id=${process.env.NEXT_PUBLIC_Naver_OAuth_Client_Id}&client_secret=${process.env.NEXT_PUBLIC_Naver_OAuth_Client_Secret}&redirect_uri=${naver_SIGNUP_REDIRECT_URI}`,{
        headers:{
            'X-Naver-Client-Id':process.env.NEXT_PUBLIC_Naver_OAuth_Client_Id,
            'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_Naver_OAuth_Client_Secret
        },  
    });
    const res2 = await axios.get(naver_USER_INFO,{
        headers: {
            Authorization: 'Bearer ' + `${res.data.access_token}`,
          },
    })
    //토큰으로부터 OAUTH 정보 받아왔을떄 실행.
    if(res2){
        try{
            db.query(
                `SELECT nickname FROM users WHERE email='${res2.data.email}'; `
            ,async(error:Error,result:Array<email>)=>{
                if(error){
                    console.error("로그인하기위한 데이터베이스에 정보 조회중 오류 발생")
                    alert("사용자 정보 조회중 오류 발생, 관리자에게 문의 하세요")
                    response.redirect(403,`${process.env.NEXT_PUBLIC_IP}`)
                    return false
                } else{
                    if(result[0]){
                        console.log(result)
                        session.email = res2.data.email;
                        session.nickname = result[0].nickname;
                        session.auth= "naver"
                        await session.save();
                        await sleep(250);
                        //Return 안 넣어주면 리다이렉트 안됨
                        // 어디로 리다이렉트 해줘야하지?
                        return response.redirect(307,`${process.env.NEXT_PUBLIC_IP}`)
                    }
                    else{
                        //회원정보 없으면 닉네임 설정 페이지로 이동 
                        return response.redirect(307,`${process.env.NEXT_PUBLIC_IP}/login/nickname?email=${res2.data.email}`)
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
