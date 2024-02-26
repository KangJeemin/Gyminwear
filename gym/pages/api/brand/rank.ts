import type { NextApiRequest, NextApiResponse } from 'next';
import type {brandRank} from '../../../interface/brand'
const db = require('@/lib/connectMysql');



// 브랜드의 클릭 순위를 조회 할 수 있는 API

export default function rank (req : NextApiRequest, res : NextApiResponse){

    if(req.method==="GET"){
        try{
            db.query(`SELECT A,B,C,D,E,F,G,H,I,J FROM brand_rank ORDER BY date DESC LIMIT 0,2;`,(error:Error,result:brandRank)=>{
                if(error){
                    console.error(error)
                    return false
                } else{
                    res.setHeader('Link', `<http://${process.env.NEXT_PUBLIC_IP}/api/brand/Docs.md>; rel="help"`);
                    res.status(200).json(result);  
                    return;
                }
            })
        }
        catch (error) {
            console.error("브랜드 랭킹 정보를 조회하기 위해 데이터 베이스 접근 중 오류 발생")
            res.status(500).json({ error: '서버 오류' });  
        }
    } else {
        res.status(404).json({ error: '허용되지 않는 메서드' });
    }  
}