import { NextApiRequest, NextApiResponse } from 'next';
import { getIronSession } from "iron-session";
import {
  defaultSession,
  sessionOptions,
  sleep,
  SessionData,
} from "@/lib/config/iron-config";
const db = require('@/lib/connectMysql');


type writeInfo = {  
    postid:number,
    title:string,
    nickname:string,
    content:string,
    viewcount:number,
    date:string,
    commentcount:number
}
export default async function board(req: NextApiRequest, res: NextApiResponse) {
    const {postid,title,nickname,content}:writeInfo = req.body;
    const {id,page} = req.query
    
    if(req.method==="POST"){
        try{
            db.query(
                `INSERT INTO posts (userid,title,content) VALUES ((SELECT userid FROM users WHERE nickname ='${nickname}'),'${title}','${content}');`
            ,(error:any,result:any)=>{
                if(error){
                    console.error("게시물을 작성하는 과정에서 오류 발생.")
                    return false
                } else{
                    console.log('게시물 작성 성공')
                    res.status(200).json({ result: true });  
                }
            })
          }
          catch (error) {
            console.error("데이터 베이스에 게시물 저장 중 에러 발생")
            res.status(500).json({ error: '서버 오류' });  
          }
    }
    else if(req.method==="GET") {
        if(id===undefined){
            try{
                db.query(
                    `SELECT posts.postid, posts.title, users.nickname, posts.content, posts.viewcount, posts.date, COUNT(comments.commentid) AS commentcount
                    FROM posts
                    JOIN users ON posts.userid = users.userid LEFT JOIN comments ON posts.postid = comments.postid GROUP BY posts.postid;
                    `
                ,(error:any,result:any)=>{
                    if(error){
                        console.error("게시물을 조회하는 과정에서 오류 발생.")
                        return false
                    } else{
                        res.status(200).json(result);  
                    }
                })
            }
            catch (error) {
                console.error("데이터 베이스에 유저 정보 조회 중")
                res.status(500).json({ error: '서버 오류' });  
            }
        }
        else{
            try{ 
                db.query(
                    `SELECT posts.postid, posts.title, users.nickname, posts.content, posts.viewcount, posts.date, COUNT(comments.commentid) AS commentcount
                    FROM posts
                    JOIN users ON posts.userid = users.userid LEFT JOIN comments ON posts.postid = comments.postid WHERE posts.postid= ${id} GROUP BY posts.postid; 
                    `
                ,(error:any,result:any)=>{
                    if(error){
                        console.error("게시물을 조회하는 과정에서 오류 발생.")
                        return false
                    } else{
                        res.status(200).json(result);  
                    }
                })
              }
              catch (error) {
                console.error("데이터 베이스에 유저 정보 조회 중")
                res.status(500).json({ error: '서버 오류' });  
              }
            
        }
    }
    else if(req.method==="DELETE"){
        try{
            db.query(
                `DELETE FROM posts WHERE postid=${postid};`
            ,(error:any,result:any)=>{
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
    else {
        res.status(405).json({ error: '허용되지 않는 메서드' });
      }  
}