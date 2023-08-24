import { count } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('../../src/db/db')


export default async function Search(req : NextApiRequest, res : NextApiResponse) {
    let searchstring = await req.query.result
    // db.query(`SELECT * FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
    // function (err: any, result: any) {
    //     if(err) {
    //         res.status(500).json({ error: 'An error occurred in err' });
    //     } else {
    //         db.query(`SELECT COUNT(*) FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
    //         function (counterr: any, countresult: any) {
    //         if(counterr) {
    //            res.status(500).json({ error: 'An error occurred in counterr' });
    //         } else {
    //             res.json({ result, countresult });
    //         }
    //         });                
    //     }
    // });
    db.query(`SELECT * FROM Top WHERE brandname LIKE '%피%' OR productname LIKE '%피%'`,
    function (err: any, result: any) {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
            console.log(result)
        }
    });
}