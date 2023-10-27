import type { NextApiRequest, NextApiResponse } from 'next';
import type { gymWearItem } from '@/src/type/gymwear';
const db = require('../../src/db/db')

export default function toppage(req : NextApiRequest, res : NextApiResponse) {
    const sort=req.query.sort
    const pageNumber= req.query.page
    
    if(sort==="all"){
        if(pageNumber==='1'){
            db.query("SELECT * FROM gym.top ORDER BY date LIMIT 0,20",
            function (err: any, result: gymWearItem) {
            if(err) {
            console.log(err)
            } else {
            res.json(result);
            }
            });
        }
        else{
            console.log("toppage all페이지 1의 아이템 정보 요청 중 에러 발생")
        }
    }
    else{
        if(pageNumber==='1'){
            db.query(`SELECT * FROM gym.top  WHERE sort LIKE '%${sort}% ORDER BY date LIMIT 0,20`,
            function (err: any, result: gymWearItem) {
            if(err) {
                console.log(err)
            } else {
                res.json(result);
            }
            });
        }
        else if(pageNumber==='2'){
            db.query(`SELECT * FROM gym.top  WHERE sort LIKE '%${sort}% ORDER BY date LIMIT 20,20`,
            function (err: any, result: gymWearItem) {
            if(err) {
                console.log(err)
            } else {
                res.json(result);
            }
            });
        }
        else{
            console.log("toppage 페이지 아이템 정보 요청 중 에러 발생")
        }
    }
}


    
    