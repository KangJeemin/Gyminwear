import React from "react";
import { useRouter } from "next/router";
import { NextApiRequest, NextApiResponse } from "next";

function index(request: NextApiRequest, response: NextApiResponse) {
  React.useEffect(() => {
    console.log(code);
  });
  const router = useRouter();
  const code = request;
  const googleAuthURL = "https://accounts.google.com/o/oauth2/v2/auth";
  const redirect_uri = "http://localhost:3000/api/oauth/google";
  const GoogleOauthClientId = process.env.NEXT_PUBLIC_Google_OAuth_Client_Id;
  const GoogleOauthPassword = process.env.GoogleOauthPassword;
  const GoogleOauthAPI = process.env.GoogleOauthAPI;
  // const GoogleScope = "https://www.googleapis.com/auth/drive.metadata.readonly";
  const GoogleScope = "email profile";

  return (
    <>
      <div
        onClick={() => {
          router.push(
            `${googleAuthURL}?client_id=${GoogleOauthClientId}&redirect_uri=${redirect_uri}&response_type=code&scope=${GoogleScope}`
          );
        }}
      >
        hi!
      </div>
    </>
  );
}

export default index;
