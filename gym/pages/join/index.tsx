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

export default function SignUp() {
  const [userInfo, setUserInfo] = React.useState(false);
  const [userPassword, setUserPassword] = React.useState("");
  const router = useRouter();

  const checkJoin = (
    email: string,
    name: string,
    password: string,
    nickname: string
  ) => {
    const validateEmail = () => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };
    if (!validateEmail()) {
      alert("올바른 이메일 형식을 입력해주세요.😅)");
      return false;
    }
    //이름 확인 (한글로만 3자)
    const validateName = () => {
      const nameRegex = /^[가-힣]+$/;
      return name.length === 3 && nameRegex.test(name);
    };
    if (!validateName()) {
      alert("성함을 재 입력해주세요(한글로 3자리 입력해주세요.😅)");
      return false;
    }
    //바말번호 확인 (영대소문자, 특수문자 포함 12자 이상)
    const validatePassword = () => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/;
      return password.length >= 8 && passwordRegex.test(password);
    };
    if (!validatePassword()) {
      alert(
        "비밀번호는 8자리 이상, 영문, 숫자, 특수문자를 포함하여 입력해주세요.😭"
      );
      return false;
    }
    // 닉네임 확인(한글, 영대소문자 3~12자)
    const validateNickName = () => {
      const regex = /^[a-zA-Z0-9가-힣]+$/;
      return (
        nickname.length >= 3 && nickname.length <= 12 && regex.test(nickname)
      );
    };
    if (!validateNickName()) {
      alert("닉네임은 영어 또는 한글로 3~12자 이내로 입력해주세요.😭");
      return false;
    }
    return true;
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email, name, password, nickname } = Object.fromEntries(
      data.entries()
    );
    const userInfo = {
      email,
      name,
      password,
      nickname,
    };
    //회원가입 조건이 만족한다면 true 불만족 한다면 false
    const sendUserinfo = checkJoin(
      email.toString(),
      name.toString(),
      password.toString(),
      nickname.toString()
    );
    //회원가입 조건이 모두 만족할 때 서버에 회원가입 요청
    if (sendUserinfo === true) {
      try {
        const response = await fetch("api/join", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
        if (response.ok) {
          // 성공적인 응답 처리
          const responseData = await response.json();
          // 응답 결과가 true일 경우 회원가입 성공 했다는 알림과 함께 로그인 페이지로 이동.
          if (responseData.result) {
            router.push("/login");
            alert("회원가입에 성공했습니다.");
          }
        } else {
          // 오류 응답 처리
          console.error("POST 요청이 실패했습니다.");
        }
      } catch (error) {
        // 네트워크 오류 등 예외 처리
        console.error("오류 발생:", error);
      }
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
            <span style={{ color: "black" }}>회원가입</span>
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일주소"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="성함"
                  name="name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호(8자리,특수문자,영소대문자포함)"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <TextField
                  required
                  fullWidth
                  id="nickname"
                  label="닉네임(3~12자 이내)"
                  name="nickname"
                  autoComplete="nickname"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ ml: 3, width: "40%" }}
                >
                  중복확인
                </Button>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label={
                    <Box sx={{ color: "black" }}>
                      짐인웨어에대한 공지사항 및 기타알림(행사)을 이메일로
                      받아보시려면 체크하여주세요!
                    </Box>
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  이미 짐인웨어 회원이신가요? 그럼 바로 로그인 하세요!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
