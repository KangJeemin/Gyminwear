import type { NextApiRequest, NextApiResponse } from 'next';
import type { gymWearItem } from '@/src/type/gymwear';
const db = require('../../src/db/db')

export default function bottompage(req : NextApiRequest, res : NextApiResponse) {
    const pageNumber= req.query.page
    if(pageNumber==='1'){
        db.query("SELECT * FROM gym.bottom LIMIT 0,20",
        function (err: any, result: gymWearItem) {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
        }
        });
    }
    else if(pageNumber==='2'){
        db.query("SELECT * FROM gym.bottom LIMIT 20,20",
        function (err: any, result: gymWearItem) {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
        }
        });
    }
    else{
        console.log("페이지 1의 아이템 정보 요청 중 에러 발생")
    }
    
}