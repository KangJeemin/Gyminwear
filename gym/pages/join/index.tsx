import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
    
    const [userInfo,setUserInfo] = React.useState(false);

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Gyminwear
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = await data.get('email');
    const name = await data.get('name')
    const password = await data.get('password')
    const nickname = await data.get('nickname')

    const userInfo = {
        email,
        name,
        password,
        nickname
    }

    const checkJoin =() => {
        //바말번호 확인 
        const validatePassword = () => {
            const passwordRegex =
              /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
            return password.length >= 8 && passwordRegex.test(password);
          };
          if (!validatePassword()) {
            console.error("비밀번호는 8자리 이상, 영문, 숫자, 특수문자를 포함하여 입력해주세요.")
            return;
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          <span style={{ color: 'black' }}>회원가입</span>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nickname"
                  label="닉네임"
                  name="nickname"
                  autoComplete="nickname"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label={<Box sx={{ color: 'black' }}>짐인웨어에대한 공지사항 및 기타알림(행사)을 이메일로 받아보시려면 체크하여주세요!</Box>}
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