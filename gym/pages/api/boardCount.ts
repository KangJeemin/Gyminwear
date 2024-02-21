import { NextApiRequest, NextApiResponse } from 'next';
import type { readInfo,boardProps } from '@/interface/board';
const db = require('@/lib/connectMysql');

export default async function board(req: NextApiRequest, res: NextApiResponse) {
    const {id} = req.query
    const page:string= req.query.page as string
    if(req.method==="GET") {
        db.query(`UPDATE posts SET viewcount = viewcount + 1 WHERE postid = ${id};`,(error:Error)=>{
            if(error){
                console.error("게시물 조회수를 추가하는 과정에서 오류 발생.")
                console.log(error)
            }
            else{
                res.setHeader('Link', `<http://${process.env.NEXT_PUBLIC_IP}/pages/api/Docs.md>; rel="help"`);
                res.status(200).json(true);  
            }
        })
    }
}
    