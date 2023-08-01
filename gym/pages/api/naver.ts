import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios"
export default (req: NextApiRequest, res: NextApiResponse)=>{

  const AppName = encodeURIComponent('rbw');    
let url ='https://openapi.naver.com/v1/search/shop?query='

const URL = url + AppName; // Assuming you have defined 'url' somewhere in your code

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