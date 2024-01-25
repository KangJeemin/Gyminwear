import { NextApiRequest, NextApiResponse } from 'next';
const db = require('@/lib/connectMysql');
import type {boardProps } from '@/interface/board';

export default async function miniboard(req: NextApiRequest, res: NextApiResponse) {
            try{
                db.query(
                    `SELECT
                    posts.postid,
                    posts.title,
                    users.nickname,
                    posts.content,
                    posts.viewcount,
                    posts.date,
                    COUNT(comments.commentid) AS commentcount,
                    (SELECT COUNT(*) FROM (
                      SELECT posts.postid
                      FROM posts
                      JOIN users ON posts.userid = users.userid
                      LEFT JOIN comments ON posts.postid = comments.postid
                      GROUP BY posts.postid
                    ) AS subquery) AS pagecount
                  FROM
                    posts
                    JOIN users ON posts.userid = users.userid
                    LEFT JOIN comments ON posts.postid = comments.postid
                  GROUP BY
                    posts.postid, posts.title, users.nickname, posts.content, posts.viewcount, posts.date
                  ORDER BY
                    posts.date DESC
                  LIMIT 0,4;
                  
                    `
                ,(error:Error,result:boardProps)=>{
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