import * as React from "react";
import Head from "next/head";
import LoginContainer from "@/components/login/LoginContainer";
import Login from "@/components/login/Login";
import { useRouter } from "next/router";

export default function index() {
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
      </LoginContainer>
    </>
  );
}
