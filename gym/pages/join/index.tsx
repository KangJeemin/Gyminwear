import Grid from "@mui/material/Grid";
import LoginContainer from "@/components/join/LoginContainer";
import Normal from "@/components/join/Normal";
import Google from "@/components/join/Google";
import Kakao from "@/components/join/Kakao";
import Naver from "@/components/join/Naver";
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
