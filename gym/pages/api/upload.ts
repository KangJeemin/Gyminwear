import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { S3Client } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { NextApiRequest, NextApiResponse } from "next";
import AWS from 'aws-sdk'


export default async function POST(request:NextApiRequest,response:NextApiResponse) {
  if(request.method==="POST"){
    const s3 = new AWS.S3({
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
      region:process.env.NEXT_PUBLIC_AWS_REGION,
    });
    var params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
      Fields: {
        key: ''
      }
    };
    s3.createPresignedPost(params, function(err, data) {
      if (err) {
        console.error('Presigning post data encountered an error', err);
      } else {
        console.log('The post data is', data);
      }
    });
    
    // console.log('a')
    // try {
    // const { filename, contentType } = await request.body
    // const client = new S3Client({  region: process.env.NEXT_PUBLIC_AWS_REGION,
    //   })
    //   console.log(client)
    // const { url, fields } = await createPresignedPost(client, {
    //   Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME ? process.env.NEXT_PUBLIC_AWS_BUCKET_NAME : '' ,
    //   Key: uuidv4(),
    //   Conditions: [
    //     ['content-length-range', 0, 10485760], // up to 10 MB
    //     ['starts-with',process.env.NEXT_PUBLIC_AWS_ACCESS_KEY , contentType],
    //   ],
    //   Fields: {
    //     acl: 'public-read',
    //     'Content-Type': contentType,
    //   },
    //   Expires: 600, // Seconds before the presigned post expires. 3600 by default.
    // })
    // console.log(url);
    // response.json({  url, fields })
  // } catch (error) {
    // console.log("error")
    // response.json({ error: "error" })
  // }
}
}