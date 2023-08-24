import type { NextApiRequest, NextApiResponse } from 'next';
import { useSearchParams } from 'react-router-dom';
const db = require('../../src/db/db')


export default function Search(req : NextApiRequest, res : NextApiResponse) {
    let searchstring = req.query.search
    let searchText = req.body
    db.query(`SELECT * FROM Top WHERE brandname LIKE '%${searchstring}%' OR productname LIKE '%${searchstring}%'`,
    function (err: any, result: any) {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
            
        }
    });
}