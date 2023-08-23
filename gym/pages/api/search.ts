import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('../../src/db/db')

export default function test(req : NextApiRequest, res : NextApiResponse) {
    let searchText = req.body
    db.query(`SELECT * FROM Top WHERE brandname LIKE '%${searchText}%' OR productname LIKE '%${searchText}%'`,
    function (err: any, result: any) {
        if(err) {
            console.log(err)
        } else {
            console.log(result);
            res.json(result);
        }
    });
}