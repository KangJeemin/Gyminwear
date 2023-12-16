import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('@/lib/connectMysql');

type userInfo = {
    email:string,
    name:string,
    password:string,
    nickname:String
}

export default async function Comment(req : NextApiRequest, res : NextApiResponse){
    const {postid,nickname,content} = req.body;
    const {id,page} = req.query
    if (req.method === 'POST') {
          try{
            db.query(
                `INSERT INTO comments (postid,userid,content) VALUES ('${postid}',(SELECT userid FROM users WHERE nickname ='${nickname}'),'${content}');`
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
      } 
      else if(req.method==="GET"){
        
        try{
          db.query(
              `SELECT comments.commentid, comments.parentcommentid, comments.postid, users.nickname ,comments.content, comments.date, comments.modifydate 
              FROM comments 
              JOIN users ON comments.userid = users.userid WHERE postid='${id}';`
          ,(error:any,result:any)=>{
              if(error){
                  console.error("댓글 조회 중 오류 발생")
                  return false
              } else{
                  res.status(200).json(result);  
              }
          })
        }
        catch (error) {
          console.error("댓글을 저장하기 위해 데이터베이스에 접근 하는 도중 에러 발생")
          res.status(500).json({ error: '서버 오류' });  
        }
      }
      else {
        res.status(405).json({ error: '허용되지 않는 메서드' });
      }  
    
  
}

