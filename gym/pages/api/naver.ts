import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios"
export default (req: NextApiRequest, res: NextApiResponse)=>{
    
    // let url ='https://openapi.naver.com/v1/search/blog?/query=rbw'
    let url ='https://openapi.naver.com/v1/search/shop?query='
    let ClientID='vqhMSE8joE5v7eeLQaHt'
    let ClientSecret='EMjd5sI8k9'

const AppName = encodeURIComponent('rbw');
console.log(AppName);

const URL = url + AppName; // Assuming you have defined 'url' somewhere in your code
console.log(URL);

const returnData = [{}];
console.log(process.env.NEXT_PUBLIC_API_URL, "서버");

axios.get(URL, {
  headers: {
    'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENTID,
    'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENTSECRET
  }
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.error(error);
});
      return res.send("heoolo")
};