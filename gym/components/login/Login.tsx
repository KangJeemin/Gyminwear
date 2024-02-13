import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import useSession from "@/lib/useSession";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import Naver from "../../public/image/naver_login.png";
import Kakao from "../../public/image/kakao_login.png";
import Google from "../../public/image/google_login.png";

export default function Login() {
  const { session, isLoading, login } = useSession();
  const router = useRouter();
  //google
  const googleAuthURL = "https://accounts.google.com/o/oauth2/v2/auth";
  const googleRedirectUri = "http://localhost:3000/api/oauth/google";

  const GoogleScope = "email profile";
  //kakao
  const kakaoAuthURL = "https://kauth.kakao.com/oauth/authorize";
  const kakaoRedirectUrl = "http://localhost:3000/api/oauth/kakao";
  //naver
  const naverAuthURL = "https://nid.naver.com/oauth2.0/authorize";
  const naverRedirectURL = "http://localhost:3000/api/oauth/naver";
  const naverState = Math.round(new Date().valueOf() * Math.random()) + "";

  React.useEffect(() => {
    // 로그인이 되어 있을 경우 전 페이지로 이동
    if (session.isLoggedIn) {
      router.replace(`${process.env.NEXT_PUBLIC_IP}/`);
    }
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email, password, remember } = Object.fromEntries(data.entries());
    const loginInfo = {
      email,
      password,
      remember,
    };
    // 이거 없어도 클라이언트에서 세션 받아지는데? login 함수는 무엇일까
    // login(email, {
    //   optimisticData: {
    //     isLoggedIn: true,
    //     email,
    //   },
    //   onSuccess: (data, variables, context) => {
    //     // 여기에 원하는 동작을 추가하세요
    //     console.log("로그인 성공 후:", session);
    //   },
    // });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_IP}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      if (response.ok) {
        // 성공적인 응답 처리
        const responseData = await response.json();
        // 응답 결과가 true일 경우 회원가입 성공 했다는 알림과 함께 로그인 페이지로 이동.
        if (responseData.result) {
          router.back();
        } else {
          alert("로그인에 실패했습니다. 비밀번호를 다시 입력해 주세요.");
        }
      } else {
        // 오류 응답 처리
        console.error("POST 요청이 실패했습니다.");
      }
    } catch (error) {
      // 네트워크 오류 등 예외 처리
      console.error("오류 발생:", error);
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="이메일 주소"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox name="remember" color="primary" />}
          label={<Box sx={{ color: "black" }}>로그인 정보를 기억할까요?</Box>}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          로그인
        </Button>
        <Button
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            router.push(
              `${googleAuthURL}?client_id=${process.env.NEXT_PUBLIC_Google_OAuth_Client_Id}&redirect_uri=${googleRedirectUri}&response_type=code&scope=${GoogleScope}`
            );
          }}
        >
          <Image src={Google} alt="소셜 회사별 이미지"></Image>
        </Button>
        <Button
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            router.push(
              `${kakaoAuthURL}?response_type=code&client_id=${process.env.NEXT_PUBLIC_Kakao_OAuth_Client_Id}&redirect_uri=${kakaoRedirectUrl}`
            );
          }}
        >
          <Image src={Kakao} alt="소셜 회사별 이미지"></Image>
        </Button>
        <Button
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            router.push(
              `${naverAuthURL}?response_type=code&client_id=${process.env.NEXT_PUBLIC_Naver_OAuth_Client_Id}&redirect_uri=${naverRedirectURL}&state=${naverState}`
            );
          }}
        >
          <Image src={Naver} alt="소셜 회사별 이미지"></Image>
        </Button>
      </Box>
    </>
  );
}
