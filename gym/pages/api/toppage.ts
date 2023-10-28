import type { NextApiRequest, NextApiResponse } from 'next';
import type { gymWearItem } from '@/src/type/gymwear';
import type { searchResultCount } from '@/src/type/gymwear';
import createMysqlLimit from '@/src/module/createMysqlLimit';
const db = require('../../src/db/db')

export default async function toppage(req : NextApiRequest, res : NextApiResponse) {
    const sort=req.query.sort
    const pageNumber:string= req.query.page as string
    let limit:string = await createMysqlLimit(pageNumber)
    
    if(sort==="all"){
        db.query(`SELECT * FROM gym.top ORDER BY date LIMIT ${limit}`,
        function (err: any, result: gymWearItem) {
        if(err) {
            res.status(500).json({ error: 'An error occurred in err' });
        } else {
            db.query(`SELECT COUNT(*) AS C FROM (SELECT * FROM gym.top ORDER BY date LIMIT ${limit}) AS combine_results`,
            function (counterr: any, countresult: searchResultCount) {
            if(counterr) {
                res.status(500).json({ error: 'An error occurred in counterr' });
            } else {
                res.json({result,countresult})
            }
            });                
        }
        });
    }
    else{
        db.query(`SELECT * FROM gym.top  WHERE sort LIKE '%${sort}%' ORDER BY date LIMIT ${limit}`,
        function (err: any, result: gymWearItem) {
        if(err) {
            res.status(500).json({ error: 'An error occurred in err' });
        } else {
            db.query(`SELECT COUNT(*) AS C FROM (SELECT * FROM gym.top  WHERE sort LIKE '%${sort}%' ORDER BY date LIMIT ${limit}) AS combine_results`,
            function (counterr: any, countresult: searchResultCount) {
            if(counterr) {
                res.status(500).json({ error: 'An error occurred in counterr' });
            } else {
                res.json({result,countresult})
            }
            });                
        }
        });
    }
}


    
    