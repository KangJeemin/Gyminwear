import { count } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('../../src/db/db')


export default function Search(req : NextApiRequest, res : NextApiResponse) {
    const searchstring = req.query.search;
    const pageNumber = req.query.page;
    if(pageNumber==='1'){
        db.query(`SELECT * FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%' LIMIT 0,20`,
        function (err: any, result: any) {
            if(err) {
                res.status(500).json({ error: 'An error occurred in err' });
            } else {
                db.query(`SELECT COUNT(*) AS C FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
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
    else if(pageNumber==='2'){
        db.query(`SELECT * FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%' LIMIT 20,20`,
        function (err: any, result: any) {
            if(err) {
                res.status(500).json({ error: 'An error occurred in err' });
            } else {
                db.query(`SELECT COUNT(*) AS C FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
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
        db.query(`SELECT * FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%' LIMIT 40,20`,
        function (err: any, result: any) {
            if(err) {
                res.status(500).json({ error: 'An error occurred in err' });
            } else {
                db.query(`SELECT COUNT(*) AS C FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
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