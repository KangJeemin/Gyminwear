import type { NextApiRequest, NextApiResponse } from 'next';
import type { gymWearItem } from '@/src/type/gymwear';
const db = require('../../src/db/db')

export default function  bestall() {
    let a:any
    db.query("SELECT * FROM gym.bottom UNION SELECT * FROM gym.top ORDER BY likecount DESC LIMIT 0,4",
    async function (err: any, result: gymWearItem) {
        if(err) {
            return console.log(err)
        } else {
            a= await result;
        }
    });
    console.log(a)
    return a;
}