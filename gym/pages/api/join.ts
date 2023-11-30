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
        const requestData = req.body;
        let inputPassword = requestData.password;
        let salt = Math.round((new Date().valueOf() * Math.random())) + "";
        let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

        
          try{
            return new Promise((resolve, reject) => {
                db.query(
                  "SELECT * FROM gym.bottom UNION SELECT * FROM gym.top ORDER BY likecount DESC LIMIT 0,4",
                  (err: any, result: boolean) => {
                    if (err) {
                      console.error(err);
                      reject(err);
                    } else {
                        resolve(result)
                    }
                  }
                );
              });
          }
          catch (error) {
            console.error("데이터 베이스에 유저 정보 저장 중 에러 발생")
            res.status(500).json({ error: '서버 오류' });  
          }


          const responseData = {

            message: 'POST 요청이 성공했습니다.',
            receivedData: requestData,
          };
      } else {
        res.status(405).json({ error: '허용되지 않는 메서드' });
      }  
  
}
