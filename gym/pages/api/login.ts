import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('@/lib/connectMysql');
const crypto = require('crypto');
type LoginInfo = {  
    email:string,
    password:string,
}

export default async function Join(req : NextApiRequest, res : NextApiResponse){
    if (req.method === 'POST') {
        const requestData:LoginInfo = req.body;

        // 현재 비밀번호와 데이터베이스에 저장되어 있는 salt 값으로 비밀번호 조회하기
        const inputEmail = requestData.email;
        const inputPassword = requestData.password;
        let salt:string = "";
        let DbPassword: string = "";
        const hashPassword =  crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

        // db.query(`SELECT * FROM top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%' LIMIT ${limit}`,
          try{
            db.query(
                `SELECT password FROM user WHERE email = ${inputEmail}; `
            ,(error:any,result:any)=>{
                if(error){
                    console.error("회원가입 중 유저 정보를 삽입 하는 과정에서 오류 발생")
                    return false
                } else{
                    console.log(result)
                    // res.status(200).json({ result: true });  
                    // 모든 쿼리가 완료되면 데이터베이스 연결 종료
                    db.end();
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