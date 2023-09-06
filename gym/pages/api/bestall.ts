import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('../../src/db/db')

export default function bestall(req : NextApiRequest, res : NextApiResponse) {

    db.query("SELECT * FROM gym.bottom UNION SELECT * FROM gym.top ORDER BY likecount DESC LIMIT 0,4",
    function (err: any, result: any) {
        if(err) {
            console.log(err)
        } else {
            res.json(result);
        }
    });
}