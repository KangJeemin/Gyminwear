import type { NextApiRequest, NextApiResponse } from 'next';
import type { gymWearItem } from '@/src/type/gymwear';
import type { searchResultCount } from '@/src/type/searchResultCount';
const db = require('../../src/db/db')


export default function search(req : NextApiRequest, res : NextApiResponse) {
    console.log(req.query)
    const searchstring = req.query.search;
    const pageNumber = req.query.page;
    
    if(pageNumber==='1'){
        db.query(`SELECT * FROM top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%' LIMIT 0,20`,
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
    else if(pageNumber==='2'){
        db.query(`SELECT * FROM top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%' LIMIT 20,20`,
        function (err: any, result: any) {
            if(err) {
                res.status(500).json({ error: 'An error occurred in err' });
            } else {
                db.query(`SELECT COUNT(*) AS C FROM top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
                function (counterr: any, countresult: any) {
                if(counterr) {
                   res.status(500).json({ error: 'An error occurred in counterr' });
                } else {
                        res.json({result,countresult})//
                }
                });                
            }
        });
    }
    else if(pageNumber==='3'){
        db.query(`SELECT * FROM top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%' LIMIT 40,20`,
        function (err: any, result: any) {
            if(err) {
                res.status(500).json({ error: 'An error occurred in err' });
            } else {
                db.query(`SELECT COUNT(*) AS C FROM top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
                function (counterr: any, countresult: any) {
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
        console.log("오류 발생")
    }
}