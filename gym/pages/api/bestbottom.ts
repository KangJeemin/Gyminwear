import type { NextApiRequest, NextApiResponse } from 'next';
import type { gymWearItem } from '@/src/type/gymwear';
const db = require('../../src/db/db')

export default function bestbottom(req : NextApiRequest, res : NextApiResponse) {

    db.query("SELECT * FROM bottom ORDER BY date DESC LIMIT 0,4",
    function (err: any, result: gymWearItem) {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
        }
    });
}