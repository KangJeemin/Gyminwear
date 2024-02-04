import * as React from "react";
import Head from "next/head";
import LoginContainer from "@/components/login/LoginContainer";
import Login from "@/components/login/Login";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Naver from "../../public/image/naver_login.png";
import Kakao from "../../public/image/kakao_login.png";
import Google from "../../public/image/google_login.png";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  height: 60,
  lineHeight: "60px",
}));

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
        {/* <Box>소셜 네트워크로 회원가입 및 일반 회원가입</Box> */}
        {/*         
          <Image src={Google} alt="소셜 회사별 이미지"></Image>
          <Image src={Kakao} alt="소셜 회사별 이미지"></Image>
          <Image src={Naver} alt="소셜 회사별 이미지"></Image> */}
      </LoginContainer>
    </>
  );
}
