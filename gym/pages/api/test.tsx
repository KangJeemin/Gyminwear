import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('../src/db/db');

export default function test(req : NextApiRequest, res : NextApiResponse) {
    db.connect((err:any)=>{
        if(err){
          console.log("DB와 연결중에 에러가 발생했습니다.");
        }
        else
        console.log("DB와 연결 완료");
      });
    db.query("SELECT * FROM brand",
    function (err: any, result: any) {
        if(err) {
            console.log(err)
        } else {
            console.log(result);
            res.json(result);
        }
    });
}