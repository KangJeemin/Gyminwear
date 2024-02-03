import * as React from "react";
import Head from "next/head";
import LoginContainer from "@/components/login/LoginContainer";
import Login from "@/components/login/Login";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import NaverIcon from "@/public/image/btnG_아이콘원형.png";

export default function index() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>헬스 짐웨어 | 운동복 모음 사이트</title>
        <meta
          name="description"
          content="짐인웨어에 로그인하여 유저들과 소통해보세요!"
        />
      </Head>
      <LoginContainer>
        <Login />
        <Box>소셜 네트워크로 회원가입 및 일반 회원가입</Box>
        <Stack direction="row" spacing={6}>
          <Avatar
            alt="네이버 이미지"
            src="@/public/image/btnG_아이콘원형.png"
          />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Stack>
      </LoginContainer>
    </>
  );
}
