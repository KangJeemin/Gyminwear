
import type { boardProps } from "@/interface/board";
const db = require('@/lib/connectMysql');

export default async function getMiniBoard(): Promise<string> {
  return new Promise((resolve, reject) => {
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
      
        `,
      (err: Error, result:boardProps) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
            const serializedResult = JSON.stringify(result); // 데이터 직렬화
            resolve(serializedResult);
          
        }
      }
    );
  });
}
