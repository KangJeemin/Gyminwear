import type { NextApiRequest, NextApiResponse } from 'next';
import type { gymWearItem } from '@/ver1-files/src/type/gymwear';
import type { searchResultCount } from '@/ver1-files/src/type/gymwear';
import createMysqlLimit from '@/ver1-files/src/module/createMysqlLimit';
const db = require('../../src/db/db')


export default async function search(req : NextApiRequest, res : NextApiResponse) {
    console.log(req.query)
    const searchstring = req.query.search;
    const pageNumber:string= req.query.page as string
    let limit:string = await createMysqlLimit(pageNumber)
    
    db.query(`SELECT * FROM top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%' LIMIT ${limit}`,
    function (err: any, result: gymWearItem) {
        if(err) {
            res.status(500).json({ error: 'An error occurred in err' });
        } else {
            db.query(`SELECT COUNT(*) AS C FROM top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
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