import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('../../db/db')

export default function test(req : NextApiRequest, res : NextApiResponse) {

    db.query("SELECT * FROM Brand",
    function (err: any, result: any) {
        if(err) {
            console.log(err)
        } else {
            console.log(result);
            res.json(result);
        }
    });
}