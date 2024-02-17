import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('@/lib/connectMysql');

// 브랜드를 클릭 했을때 클릭수가 증가하는 API

export default function Click(req : NextApiRequest, res : NextApiResponse){
    const {id} = req.query;
    if(req.method==="GET"){
        try{
            db.query(`UPDATE brand_click SET click= click + 1 WHERE brandid =${id};`,(error:Error)=>{
                if(error){
                    console.error("브랜드 랭킹 정보를 조회하는 과정에서 오류 발생")
                    return false
                } else{
                    res.status(200).json(true);  
                }
            })
        }
        catch (error) {
            console.error("브랜드 랭킹 정보를 조회하기 위해 데이터 베이스 접근 중 오류 발생")
            res.status(500).json(false);  
        }
    } else {
        res.status(405).json({ error: '허용되지 않는 메서드' });
    }  
}