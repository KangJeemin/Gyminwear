import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse)=>{
    const encoder = new TextEncoder();
    const ClientID=process.env.NEXT_PUBLIC_NAVER_ClientId
    // let url ='https://openapi.naver.com/v1/search/blog?/query=rbw'
    let url ='https://openapi.naver.com/v1/search/shop?query='
    // let ClientID='vqhMSE8joE5v7eeLQaHt'
    let ClientSecret='EMjd5sI8k9'

    let AppName=encodeURIComponent('rbw')
    console.log(AppName)
    let URL =url + AppName
    console.log(URL)
    let returnData=[{}]
    
    fetch(URL,{
      method:'GET',
      headers:
        {'X-Naver-Client-Id':ClientID, 'X-Naver-Client-Secret': ClientSecret}
    
      }
    ).then((response) => response.json()).then(data=>{console.log(data)})
      return res.send("heoolo")
};