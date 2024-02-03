import Grid from "@mui/material/Grid";
import LoginContainer from "@/components/login/LoginContainer";
import Normal from "@/components/login/Normal";
import Google from "@/components/login/Google";
import Kakao from "@/components/login/Kakao";
import Naver from "@/components/login/Naver";
const index = () => {
  return (
    <LoginContainer>
      <Normal></Normal>

      <Grid xs={10} sx={{ mt: 3, justifyContent: "flex-end" }}>
        <Kakao></Kakao>
        <Naver></Naver>
        <Google></Google>
      </Grid>
    </LoginContainer>
  );
};

export default index;
