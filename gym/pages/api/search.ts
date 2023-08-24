import { count } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';
import { useSearchParams } from 'react-router-dom';
const db = require('../../src/db/db')


export default function Search(req : NextApiRequest, res : NextApiResponse) {
    let searchstring = req.query.result
    console.log(searchstring)
    let searchText = req.body
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
    db.query(`SELECT * FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
    function (err: any, result: any) {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
            console.log(result)
        }
    });
}