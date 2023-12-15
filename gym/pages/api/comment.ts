import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('@/lib/connectMysql');

type userInfo = {
    email:string,
    name:string,
    password:string,
    nickname:String
}
export default async function Comment(req : NextApiRequest, res : NextApiResponse){
    
    if (req.method === 'POST') {
        const requestData:userInfo = req.body;
          try{
            db.query(
            ,(error:any,result:any)=>{
                if(error){
                    console.error("댓글 저장 중 오류 발생")
                    return false
                } else{
                    res.status(200).json({ result: true });  
                }
            })
          }
          catch (error) {
            console.error("댓글을 저장하기 위해 데이터베이스에 접근 하는 도중 에러 발생")
            res.status(500).json({ error: '서버 오류' });  
          }
      } else {
        res.status(405).json({ error: '허용되지 않는 메서드' });
      }  
  
}

