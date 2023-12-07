import { NextApiRequest, NextApiResponse } from 'next';
import { getIronSession } from "iron-session";
import {
  defaultSession,
  sessionOptions,
  sleep,
  SessionData,
} from "@/lib/config/iron-config";
const db = require('@/lib/connectMysql');
const crypto = require('crypto');


type LoginInfo = {  
    email:string,
    password:string,
}
export default async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const session = await getIronSession<SessionData>(
    req,
    res,
    sessionOptions,
  );
  if (req.method === 'POST') {
    const {email,password}:LoginInfo = req.body;
    
    // 현재 비밀번호와 데이터베이스에 저장되어 있는 salt 값으로 비밀번호 조회하기
      try{
        db.query(
            `SELECT password,salt,nickname FROM user WHERE email='${email}'; `
        ,async(error:any,result:any)=>{
            if(error){
                console.error("로그인하기위한 데이터베이스에 정보 조회중 오류 발생")
                res.status(200).json({ result:false }); 
                return false
            } else{
                let DbPassword= await result[0].password;
                let salt= await result[0].salt;
                let hashPassword = crypto.createHash("sha512").update(password + salt).digest("hex");     
                
                //데이터 베이스에 있던 해쉬암호와 새로 받은 해쉬 암호와 비교하여 똑같으면 프론트에 true를 줌 (로그인 성공)
                if(DbPassword==hashPassword){
                  session.email = email;
                  session.isLoggedIn = true;
                  session.nickname = result[0].nickname;
                  await session.save();
                  
                  // sleep으로 login 함수에 promise 던져주는듯
                  await sleep(250);
                  res.status(200).json({ result:true }); 
                  hashPassword=''; 
                  console.log('서버session=',session);
                  //이넘은 어딜 반환한느거임? A) Login 함수에 반환하는듯.
                  return res.json(session);
                  
                }
                //데이터 베이스에 있던 해쉬암호와 새로 받은 해쉬 암호와 비교하여 다르면 프론트에 false를 줌 (로그인 실패)
                else{
                  console.error("비밀번호 불일치")
                  res.status(200).json({result:false}); 
                  hashPassword=''; 
                  return res.json(defaultSession);
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


    
  


// login

  

  // if (request.method === "POST") {
  //   const { username = "No username" } = request.body;


    

    
  // } else if (request.method === "GET") {
  //   // simulate looking up the user in db
  //   await sleep(250);

  //   if (session.isLoggedIn !== true) {
  //   }

  //   return response.json(session);
  // } else if (request.method === "DELETE") {
  //   session.destroy();

  //   return response.json(defaultSession);
  // }

  // return response.status(405).end(`Method ${request.method} Not Allowed`);