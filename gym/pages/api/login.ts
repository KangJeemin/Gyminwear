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
        const inputEmail = await requestData.email;
        const inputPassword = await requestData.password;
        let salt:string = "";
        let DbPassword: string = "";
        const hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");     
           
          try{
            db.query(
                `SELECT password,salt FROM user WHERE email='${inputEmail}'; `
            ,async(error:any,result:any)=>{
                if(error){
                    console.error("로그인하기위한 데이터베이스에 정보 조회중 오류 발생")
                    return false
                } else{
                    console.log(result)
                    DbPassword= await result[0].password;
                    salt= await result[0].salt;
                  
                    if(DbPassword==hashPassword){
                      console.log('성공')
                        // res.status(200).json({ result:true });  
                    }
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