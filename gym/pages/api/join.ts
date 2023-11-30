import { Password } from '@mui/icons-material';
import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('@/lib/connectMysql');
const crypto = require('crypto');
type userInfo = {
    email:string,
    name:string,
    password:string,
    nickname:String
}

export default async function Join(req : NextApiRequest, res : NextApiResponse){
    if (req.method === 'POST') {
        const requestData:userInfo = req.body;

        // 오늘 날짜의 밀리초와 랜덤 값을 곱하여 반올림하여 정수를 만듬, 그 후 문자열로 변환
        let inputPassword = await requestData.password;
        let salt = await Math.round((new Date().valueOf() * Math.random())) + "";
        let hashPassword = await crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

          try{
            db.query(
                `INSERT INTO user (email,name,password,nickname,salt) VALUES (${requestData.email},${requestData.name},${hashPassword},${requestData.nickname},${salt})`
            ,(error:any,result:any)=>{
                if(error){
                    console.error("회원가입 중 유저 정보를 삽입 하는 과정에서 오류 발생")
                    return false
                } else{
                    console.log('result=',result)
                }
            })


            res.status(200).json({ result: '성공' });  
            // return new Promise((resolve, reject) => {
            //     db.query(
            //       "SELECT * FROM gym.bottom UNION SELECT * FROM gym.top ORDER BY likecount DESC LIMIT 0,4",
            //       (err: any, result: boolean) => {
            //         if (err) {
            //           console.error(err);
            //           reject(err);
            //         } else {
            //             resolve(result)
            //         }
            //       }
            //     );
            //   });
          }
          catch (error) {
            console.error("데이터 베이스에 유저 정보 저장 중 에러 발생")
            res.status(500).json({ error: '서버 오류' });  
          }
      } else {
        res.status(405).json({ error: '허용되지 않는 메서드' });
      }  
  
}
