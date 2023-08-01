import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios"
export default (req: NextApiRequest, res: NextApiResponse)=>{
    const encoder = new TextEncoder();
    
    // let url ='https://openapi.naver.com/v1/search/blog?/query=rbw'
    let url ='https://openapi.naver.com/v1/search/shop?query='
    let ClientID='vqhMSE8joE5v7eeLQaHt'
    let ClientSecret='EMjd5sI8k9'

    // let AppName=encodeURIComponent('rbw')
    // console.log(AppName)
    // let URL =url + AppName
    // console.log(URL)
    // let returnData=[{}]
    // console.log(process.env.NEXT_PUBLIC_API_URL, "서버")
    
    // fetch(URL,{
    //   method:'GET',
    //   headers:
    //     {'X-Naver-Client-Id':ClientID, 'X-Naver-Client-Secret': ClientSecret}
    
    //   }
    // ).then((response) => response.json()).then(data=>{console.log(data)})

const AppName = encodeURIComponent('rbw');
console.log(AppName);

const URL = url + AppName; // Assuming you have defined 'url' somewhere in your code
console.log(URL);

const returnData = [{}];
console.log(process.env.NEXT_PUBLIC_API_URL, "서버");

axios.get(URL, {
  headers: {
    'X-Naver-Client-Id': process.env.NEXT_PUBLIC_API_URL,
    'X-Naver-Client-Secret': ClientSecret
  }
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.error(error);
});
      return res.send("heoolo")
};