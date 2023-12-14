import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { S3Client } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { NextApiRequest, NextApiResponse } from "next";
import { ConsoleLogger } from '@nestjs/common';


export async function POST(request:NextApiRequest,response:NextApiResponse) {
  if(request.method==="POST"){

  const { filename, contentType } = await request.body
  console.log(filename)
  try {
    // const client = new S3Client({ region: process.env.NEXT_PUBLIC_AWS_REGION })
    // const { url, fields } = await createPresignedPost(client, {
    //   Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME ? process.env.NEXT_PUBLIC_AWS_BUCKET_NAME: '',
    //   Key: uuidv4(),
    //   Conditions: [
    //     ['content-length-range', 0, 10485760], // up to 10 MB
    //     ['starts-with', '$Content-Type', contentType],
    //   ],
    //   Fields: {
    //     acl: 'public-read',
    //     'Content-Type': contentType,
    //   },
    //   Expires: 600, // Seconds before the presigned post expires. 3600 by default.
    // })
    

    return response.json({ filename })
  } catch (error) {
    return response.json({ error: onmessage })
  }
}
}