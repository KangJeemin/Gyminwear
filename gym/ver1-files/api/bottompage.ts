import type { NextApiRequest, NextApiResponse } from 'next';
import type { gymWearItem } from '@/ver1-files/src/type/gymwear';
import type { searchResultCount } from '@/ver1-files/src/type/gymwear';
import createMysqlLimit from '@/ver1-files/src/module/createMysqlLimit';
const db = require('../../src/db/db')

export default async function bottompage(req : NextApiRequest, res : NextApiResponse) {
    const sort=req.query.sort
    const pageNumber:string= req.query.page as string
    let limit:string = await createMysqlLimit(pageNumber)
    
    if(sort==="all"){
        db.query(`SELECT * FROM gym.bottom ORDER BY date LIMIT ${limit}`,
        function (err: any, result: gymWearItem) {
        if(err) {
            res.status(500).json({ error: 'An error occurred in err' });
        } else {
            db.query(`SELECT COUNT(*) AS C FROM (SELECT * FROM gym.bottom ORDER BY date LIMIT ${limit}) AS combine_results`,
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
        db.query(`SELECT * FROM gym.bottom  WHERE sort LIKE '%${sort}%' ORDER BY date LIMIT ${limit}`,
        function (err: any, result: gymWearItem) {
        if(err) {
            res.status(500).json({ error: 'An error occurred in err' });
        } else {
            db.query(`SELECT COUNT(*) AS C FROM (SELECT * FROM gym.bottom  WHERE sort LIKE '%${sort}%' ORDER BY date LIMIT ${limit}) AS combine_results`,
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


    
    