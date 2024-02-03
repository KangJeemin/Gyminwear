
import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'


const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_SIGNUP_REDIRECT_URI = 'http://localhost:3000/api/oauth/google'
export default async function google(request: NextApiRequest, response: NextApiResponse) {
    
    const {code}=request.query;
    const resp = await axios.post(GOOGLE_TOKEN_URL, {
        // x-www-form-urlencoded(body)
        code,
        client_id: process.env.NEXT_PUBLIC_Google_OAuth_Client_Id,
        client_secret: process.env.NEXT_PUBLIC_Google_OAuth_Client_Password,
        redirect_uri: GOOGLE_SIGNUP_REDIRECT_URI,
        grant_type: 'authorization_code',
    });
    console.log(resp.data)
    // response.json(resp.data);
    

}