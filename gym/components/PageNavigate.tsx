import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "@/styles/styles.module.css";
import Container from "@mui/material/Container";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const windowOpen = (href: string) => {
  window.open(href);
};

export default function AutoGrid() {
  return (
    // <Box style={{
    //     display:"flex",
    //     width:"100%",
    //     height:"100%"
    // }}>
    //     <Box className={styles.main_Margin}></Box>
    //     <Box style={{
    //         width:"100%",
    //         height:"100%"
    //     }}>

    //     </Box>
    //     <Box className={styles.main_Margin}></Box>
    // </Box>
    <Container>
      <Container maxWidth="xl">
        <Box className={styles.Text1}>
          <h2>짐웨어 바로가기</h2>
        </Box>

        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://borntowin.kr/">
                <p>본투윈</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://dumbstruck.kr/">
                <p>덤브스트럭</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://smartstore.naver.com/physicalcrown">
                <p>피지컬크라운</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://www.freedomdom.kr/">
                <p>프리덤에슬레틱</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://overwhelm.co.kr/">
                <p>압도</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://firstwear.kr/">
                <p>퍼스트웨어</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://www.rbwapparel.com/">
                <p>RBW</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://gymbro.kr/">
                <p>짐브로</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="http://www.kineticpeople.co.kr/">
                <p>키네틱피플</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://www.befirstorbest.com/">
                <p>B_FoB</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://musclearmed.com/">
                <p>머슬암드</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://smartstore.naver.com/rsrs">
                <p>랩스온랩스</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://hdex.co.kr/">
                <p>Hdex</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://xexymix.com/">
                <p>잭시미스</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://smartstore.naver.com/rspt">
                <p>RSPT</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://smartstore.naver.com/fizico">
                <p>피지코어패럴</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://ardentsoul.co.kr/">
                <p>아던트소울</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://smartstore.naver.com/matblack/">
                <p>멧블랙</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://physicalgarments.com/">
                <p>피지컬가먼츠</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://smartstore.naver.com/actualize">
                <p>액츄얼라이즈</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://the-rank.co.kr/">
                <p>RANK</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://smartstore.naver.com/go_look">
                <p>고룩</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://smartstore.naver.com/universal_fit">
                <p>UNF</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://goldennmachine.kr/">
                <p>골드앤머신</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://www.unbroken.co.kr/">
                <p>언브로큰</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://smartstore.naver.com/vermann">
                <p>베르만어패럴</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://muscoloadm.cafe24.com/">
                <p>머스콜로</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://smartstore.naver.com/venafit">
                <p>VENAFIT</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://brunk.kr/">
                <p>VENAFIT</p>
              </Link>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <Link href="https://smartstore.naver.com/addtobag">
                <p>하드지머</p>
              </Link>
            </Item>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
