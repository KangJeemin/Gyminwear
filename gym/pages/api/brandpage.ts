import type { NextApiRequest, NextApiResponse } from 'next';
import type { gymWearItem } from '@/src/type/gymwear';
const db = require('../../src/db/db')

export default function brandpage(req : NextApiRequest, res : NextApiResponse) {
    const brandname=req.query.brandname
    const sort=req.query.sort
    const pageNumber= req.query.page
    
    if(sort==="all"){
        db.query(`SELECT * FROM gym.top WHERE brandname LIKE '%${brandname}%' UNION SELECT * FROM gym.bottom WHERE brandname LIKE '%${brandname}%'   LIMIT 0,20`,
        function (err: any, result: gymWearItem) {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
        }
        });
    }
    else{
        if(pageNumber==='1'){
            db.query(`SELECT * FROM gym.top WHERE brandname LIKE '%${brandname}%' AND sort LIKE '%${sort}%' LIMIT 0,20`,
            function (err: any, result: gymWearItem) {
            if(err) {
                console.log(err)
            } else {
                res.json(result);
            }
            });
        }
        else if(pageNumber==='2'){
            db.query("SELECT * FROM gym.top ORDER BY date LIMIT 20,20",
            function (err: any, result: gymWearItem) {
            if(err) {
                console.log(err)
            } else {
                res.json(result);
            }
            });
        }
        else{
            console.error()
        }
    }
}