import type { NextApiRequest, NextApiResponse } from 'next';
import type { userInfo } from '@/interface/board';
const db = require('@/lib/connectMysql');
const crypto = require('crypto');

export default async function Join(req : NextApiRequest, res : NextApiResponse){
    if (req.method === 'GET'){
      try{
        db.query(
            `SELECT nickname FROM users WHERE nickname='${req.query.nickname}';`
        ,(error:any,result:Array<string>)=>{
            if(error){
                console.error("닉네임 중복 체크중 오류 발생");
                res.status(200).json(false);  
                return false
                
            } else{
              if(result.length>0){
                console.log("g");
                res.status(200).json(false);  
              }
              else{
                res.status(200).json(true);  
              }
              
            }
        })
      }
      catch (error) {
        console.error("데이터 베이스에 유저 정보 저장 중 에러 발생")
        res.status(500).json({ error: '서버 오류' });  
      }
    }
    
    else if (req.method === 'POST') {
        const requestData:userInfo = req.body;
        
        // 오늘 날짜의 밀리초와 랜덤 값을 곱하여 반올림하여 정수를 만듬, 그 후 문자열로 변환
        const inputPassword = requestData.password;
        const salt =  Math.round((new Date().valueOf() * Math.random())) + "";
        const hashPassword =  crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

          try{
            db.query(
                `INSERT INTO users (email,name,password,nickname,salt) VALUES ('${requestData.email}','${requestData.name}','${hashPassword}','${requestData.nickname}','${salt}');`
            ,(error:Error)=>{
                if(error){
                    console.error("회원가입 중 유저 정보를 삽입 하는 과정에서 오류 발생")
                    return false
                } else{
                    res.status(200).json({ result: true });  
                }
            })
          }
          catch (error) {
            console.error("데이터 베이스에 유저 정보 저장 중 에러 발생")
            res.status(500).json({ error: '서버 오류' });  
          }
      } else {
        res.status(405).json({ error: '허용되지 않는 메서드' });
      }  
  
}

