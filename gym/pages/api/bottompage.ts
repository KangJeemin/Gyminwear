import type { NextApiRequest, NextApiResponse } from 'next';
import type { gymWearItem } from '@/src/type/gymwear';
import type { searchResultCount } from '@/src/type/gymwear';
const db = require('../../src/db/db')

export default function bottompage(req : NextApiRequest, res : NextApiResponse) {
    const sort=req.query.sort
    const pageNumber= req.query.page
    let limit:string = ""
    const queryLimit = (pageNumber:string) => {
        let pageNumbertoInt = (parseInt(pageNumber)-1)*20
        limit = `${pageNumbertoInt},20`
    }
    console.log(req.query)    
    if(sort==="all"){
        if(pageNumber==='1'){
            db.query(`SELECT * FROM gym.bottom ORDER BY date LIMIT 0,20`,
            function (err: any, result: gymWearItem) {
            if(err) {
                res.status(500).json({ error: 'An error occurred in err' });
            } else {
                db.query(`SELECT COUNT(*) AS C FROM (SELECT * FROM gym.bottom ORDER BY date LIMIT 0,20) AS combine_results`,
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
    else{
        if(pageNumber==='1'){
            db.query(`SELECT * FROM gym.bottom  WHERE sort LIKE '%${sort}%' ORDER BY date LIMIT 0,20`,
            function (err: any, result: gymWearItem) {
            if(err) {
                res.status(500).json({ error: 'An error occurred in err' });
            } else {
                db.query(`SELECT COUNT(*) AS C FROM (SELECT * FROM gym.bottom  WHERE sort LIKE '%${sort}%' ORDER BY date LIMIT 0,20) AS combine_results`,
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
            db.query(`SELECT * FROM gym.bottom  WHERE sort LIKE '%${sort}%' ORDER BY date LIMIT 20,20`,
            function (err: any, result: gymWearItem) {
            if(err) {
                res.status(500).json({ error: 'An error occurred in err' });
            } else {
                db.query(`SELECT COUNT(*) AS C FROM (SELECT * FROM gym.bottom  WHERE sort LIKE '%${sort}%' ORDER BY date LIMIT 20,20) AS combine_results`,
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
}


    
    