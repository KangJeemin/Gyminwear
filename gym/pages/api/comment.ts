import type { NextApiRequest, NextApiResponse } from 'next';
import type { readInfo,commentWrite ,commentInfo} from '@/interface/board';
const db = require('@/lib/connectMysql');

interface commentWriteApi extends commentWrite{
  parentid:number,
  nickname:string,
  content:string,
}

export default async function Comment(req : NextApiRequest, res : NextApiResponse){
    const {parentid,postid,nickname,content,commentid}:commentWriteApi = req.body;
    const {id,page} = req.query
    if (req.method === 'POST') {
      
          try{
            db.query(
                `INSERT INTO comments (parentcommentid,postid,userid,content) VALUES (${parentid===undefined?null:parentid},'${postid}',(SELECT userid FROM users WHERE nickname ='${nickname}'),'${content}');`
            ,(error:Error)=>{
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
          ,(error:Error,result:Array<commentInfo>)=>{
              if(error){
                  console.error("댓글 조회 중 오류 발생")
                  return false
              } else{
                  res.setHeader('Link', `<http://${process.env.NEXT_PUBLIC_IP}/pages/api/Docs.md>; rel="help"`);
                  res.status(200).json(result);  
              }
          })
        }
        catch (error) {
          console.error("댓글을 저장하기 위해 데이터베이스에 접근 하는 도중 에러 발생")
          res.status(500).json({ error: '서버 오류' });  
        }
      }
      else if(req.method==="DELETE"){
        try{
          db.query(
              `DELETE FROM comments WHERE commentid=${commentid};`
          ,(error:Error)=>{
              if(error){
                  console.error("게시물을 삭제하는 과정에서 오류 발생")
                  return false
              } else{
                  console.log('게시물 삭제 성공');

                  res.status(200).json({ result: true });  
              }
          })
        }
        catch (error) {
          console.error("삭제하기 위해 데이터베이스 접근 중 오류 발생.")
          res.status(500).json({ error: '서버 오류' });  
        }       
      }
      else if(req.method==="PUT"){
        try{
          db.query(
            `UPDATE comments SET content='${content}', modifydate=NOW() WHERE commentid=${commentid};`
          ,(error:Error)=>{
              if(error){
                  console.error("댓글을 수정하는 과정에서 오류 발생")
                  console.log(error)
                  return false
              } else{
                  console.log('댓글 수정 성공');
                  res.status(200).json({ result: true });  
              }
          })
        }
        catch (error) {
          console.error("댓글을 수정하기 위해  데이터베이스 접근 중 오류 발생.")
          res.status(500).json({ error: '서버 오류' });  
        }       
      }
      else{
        res.status(405).json({ error: '허용되지 않는 메서드' });
      }  
    
  
}

