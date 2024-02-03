import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
const Google = () => {
  async function GoogleOauth() {
    router.push(
      `${googleAuthURL}?client_id=${GoogleOauthClientId}&redirect_uri=${redirect_uri}&response_type=code&scope=email profile`
    );
    const res = await fetch("api/oauth/google");
    if (res) {
      console.log("ok");
    }
  }

  const router = useRouter();
  const googleAuthURL = "https://accounts.google.com/o/oauth2/v2/auth";
  const redirect_uri = "http://localhost:3000/api/oauth/google";
  const GoogleOauthClientId = process.env.NEXT_PUBLIC_Google_OAuth_Client_Id;

  return (
    <Button variant="contained" onClick={() => GoogleOauth()}>
      Google
    </Button>
  );
};

export default Google;
