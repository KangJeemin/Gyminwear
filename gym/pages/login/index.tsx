import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useSession from "@/lib/useSession";
import { useRouter } from "next/router";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Gyminwear
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const { session, isLoading, login } = useSession();
  React.useEffect(() => {
    // 로그인이 되어 있을 경우 전 페이지로 이동
    if (session.isLoggedIn) {
      window.history.back();
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
      console.log("checbox=", remember);
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
          window.history.back();
        } else {
          alert("로그인에 실패했습니다.");
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
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <span style={{ color: "black" }}>로그인</span>
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
              label={
                <Box sx={{ color: "black" }}>로그인 정보를 기억할까요?</Box>
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {"비밀번호를 잊으셨나요?"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/join" variant="body2">
                  {"회원이 아니신가요?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
