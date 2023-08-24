import { count } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('../../src/db/db')


export default function Search(req : NextApiRequest, res : NextApiResponse) {
    
    const searchstring = req.query.result
    db.query(`SELECT * FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
    function (err: any, result: any) {
        if(err) {
            res.status(500).json({ error: 'An error occurred in err' });
        } else {
            db.query(`SELECT COUNT(*) FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
            function (counterr: any, countresult: any) {
            if(counterr) {
               res.status(500).json({ error: 'An error occurred in counterr' });
            } else {
                    res.json({result,countresult})
                // console.log('result1=',result)
                // console.log('result2=',countresult)
            }
            });                
        }
    });
    // db.query(`SELECT * FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
    // function (err: any, result: any) {
    //     if(err) {
    //         console.log(err)
    //     } else {
    //         res.json(result);
    //         console.log(result)
    //     }
    // });
}