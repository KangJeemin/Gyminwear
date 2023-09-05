import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('../../src/db/db')

export default function test(req : NextApiRequest, res : NextApiResponse) {

    db.query("SELECT * FROM top ORDER BY date DESC LIMIT 0,4",
    function (err: any, result: any) {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
        }
    });
}