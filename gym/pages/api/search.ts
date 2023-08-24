import type { NextApiRequest, NextApiResponse } from 'next';
import { useSearchParams } from 'react-router-dom';
const db = require('../../src/db/db')


export default function Search(req : NextApiRequest, res : NextApiResponse) {
    const [searchParams,setSearchParams] = useSearchParams()
    const a = searchParams.get('sort')
    console.log(a)
    let searchText = req.body
    db.query(`SELECT * FROM Top WHERE brandname LIKE '%${searchText}%' OR productname LIKE '%${searchText}%'`,
    function (err: any, result: any) {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
        }
    });
}