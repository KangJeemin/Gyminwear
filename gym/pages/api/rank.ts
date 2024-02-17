import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('@/lib/connectMysql');

export default function rank (req : NextApiRequest, res : NextApiResponse){

    if(req.method==="GET"){
        try{
            db.query(`SELECT * FROM brand_rank ORDER BY date DESC LIMIT 0,2;`,(error:Error,result:any)=>{
                if(error){
                    console.error("브랜드 랭킹 정보를 조회하는 과정에서 오류 발생")
                    return false
                } else{
                    res.status(200).json(result);  
                }
            })
        }
        catch (error) {
            console.error("브랜드 랭킹 정보를 조회하기 위해 데이터 베이스 접근 중 오류 발생")
            res.status(500).json({ error: '서버 오류' });  
        }
    } else {
        res.status(405).json({ error: '허용되지 않는 메서드' });
    }  
}