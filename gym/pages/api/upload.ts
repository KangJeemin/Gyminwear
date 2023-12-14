import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { S3Client } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { NextApiRequest, NextApiResponse } from "next";
import AWS from 'aws-sdk'


export default async function POST(request:NextApiRequest,response:NextApiResponse) {
  if(request.method==="POST"){
    
    console.log('a')
    try {
    const { filename, contentType } = await request.body
    const client = new S3Client({  
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY ? process.env.AWS_ACCESS_KEY : '' ,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY ? process.env.AWS_SECRET_ACCESS_KEY : '',
      },
      region: process.env.AWS_REGION ? process.env.AWS_REGION : '' ,
      
      })
    const { url, fields } = await createPresignedPost(client, {
      Bucket: process.env.AWS_BUCKET_NAME ? process.env.AWS_BUCKET_NAME : '' ,
      Key: uuidv4(),
      Conditions: [
        ['content-length-range', 0, 10485760], // up to 10 MB
        ['starts-with', '$Content-Type', contentType]
      ],
      Fields: {
        acl: 'public-read',
      },
      Expires: 600, // Seconds before the presigned post expires. 3600 by default.
    })
    console.log('url=',url);
    return response.json({  url, fields })
  } catch (error) {
    console.log("error=",error)
    response.json({ error: "error" })
  }
}
}