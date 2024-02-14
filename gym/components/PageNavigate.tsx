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

const brandArray = [
  {
    brandname: "본투윈",
    barndUrl: "https://borntowin.kr/",
  },
  {
    brandname: "덤브스트럭",
    barndUrl: "https://dumbstruck.kr/",
  },
  {
    brandname: "덤브스트럭",
    barndUrl: "https://dumbstruck.kr/",
  },
  {
    brandname: "프리덤에슬레틱",
    barndUrl: "https://www.freedomdom.kr/",
  },
  {
    brandname: "압도",
    barndUrl: "https://overwhelm.co.kr/",
  },
  {
    brandname: "퍼스트웨어",
    barndUrl: "https://firstwear.kr/",
  },
  {
    brandname: "RBW",
    barndUrl: "https://www.rbwapparel.com/",
  },
  {
    brandname: "짐브로",
    barndUrl: "https://gymbro.kr/",
  },
  {
    brandname: "키네틱피플",
    barndUrl: "http://www.kineticpeople.co.kr/",
  },
  {
    brandname: "B_FoB",
    barndUrl: "https://www.befirstorbest.com/",
  },
  {
    brandname: "머슬암드",
    barndUrl: "https://musclearmed.com/",
  },
  {
    brandname: "랩스온랩스",
    barndUrl: "https://smartstore.naver.com/rsrs",
  },
  {
    brandname: "Hdex",
    barndUrl: "https://hdex.co.kr/",
  },
  {
    brandname: "잭시미스",
    barndUrl: "https://xexymix.com/",
  },
  {
    brandname: "RSPT",
    barndUrl: "https://smartstore.naver.com/rspt",
  },
  {
    brandname: "피지코어패럴",
    barndUrl: "https://smartstore.naver.com/fizico",
  },
  {
    brandname: "아던트소울",
    barndUrl: "https://ardentsoul.co.kr/",
  },
  {
    brandname: "멧블랙",
    barndUrl: "https://smartstore.naver.com/matblack/",
  },
  {
    brandname: "피지컬가먼츠",
    barndUrl: "https://physicalgarments.com/",
  },
  {
    brandname: "액츄얼라이즈",
    barndUrl: "https://smartstore.naver.com/actualize",
  },
  {
    brandname: "RANK",
    barndUrl: "https://the-rank.co.kr/",
  },
  {
    brandname: "고룩",
    barndUrl: "https://smartstore.naver.com/go_look",
  },
  {
    brandname: "UNF",
    barndUrl: "https://smartstore.naver.com/universal_fit",
  },
  {
    brandname: "골드앤머신",
    barndUrl: "https://goldennmachine.kr/",
  },
  {
    brandname: "언브로큰",
    barndUrl: "https://www.unbroken.co.kr/",
  },
  {
    brandname: "베르만어패럴",
    barndUrl: "https://smartstore.naver.com/vermann",
  },
  {
    brandname: "머스콜로",
    barndUrl: "https://muscoloadm.cafe24.com/",
  },
  {
    brandname: "VENAFIT",
    barndUrl: "https://smartstore.naver.com/venafit",
  },
  {
    brandname: "BRUNK",
    barndUrl: "https://brunk.kr/",
  },
  {
    brandname: "하드지머",
    barndUrl: "https://smartstore.naver.com/addtobag",
  },
  {
    brandname: "고포잇",
    barndUrl: "https://go4itmall.com/",
  },
  {
    brandname: "develop",
    barndUrl: "https://developofficial.com/",
  },
  {
    brandname: "DEFEAT",
    barndUrl: "https://defeat.co.kr/",
  },
  {
    brandname: "허그본",
    barndUrl: "https://hugvone.co.kr/",
  },
  {
    brandname: "발리안트",
    barndUrl: "https://m.valiant.kr/",
  },
  {
    brandname: "BSMD",
    barndUrl:
      "https://smartstore.naver.com/beastmode/?nt_source=googlewebsitetraffic&nt_medium=social&gclid=Cj0KCQiAn-2tBhDVARIsAGmStVm9NyLf6H8aPYAXxMVS6L2Kbz84v3eoTMYMPXzW6XprVvX8FVA3TpwaAjSlEALw_wcB",
  },
  {
    brandname: "카키그라도",
    barndUrl: "https://khakigrado.com/",
  },
];
export default function AutoGrid() {
  return (
    <Container>
      <Container maxWidth="xl">
        <Box className={styles.Text1}>
          <h2>짐웨어 바로가기</h2>
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          {brandArray.map((object, index: number) => (
            <Box gridColumn="span 4">
              <Item>
                <Link href={object.barndUrl}>
                  <p>{object.brandname}</p>
                </Link>
              </Item>
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  );
}
