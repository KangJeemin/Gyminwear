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

export const brandArray = [
  {
    brandname: "본투윈",
    brandUrl: "https://borntowin.kr/",
  },
  {
    brandname: "덤브스트럭",
    brandUrl: "https://dumbstruck.kr/",
  },
  {
    brandname: "피지컬크라운",
    brandUrl: "https://smartstore.naver.com/physicalcrown/",
  },
  {
    brandname: "프리덤에슬레틱",
    brandUrl: "https://www.freedomdom.kr/",
  },
  {
    brandname: "압도",
    brandUrl: "https://overwhelm.co.kr/",
  },
  {
    brandname: "퍼스트웨어",
    brandUrl: "https://firstwear.kr/",
  },
  {
    brandname: "RBW",
    brandUrl: "https://www.rbwapparel.com/",
  },
  {
    brandname: "짐브로",
    brandUrl: "https://gymbro.kr/",
  },
  {
    brandname: "키네틱피플",
    brandUrl: "http://www.kineticpeople.co.kr/",
  },
  {
    brandname: "B_FoB",
    brandUrl: "https://www.befirstorbest.com/",
  },
  {
    brandname: "머슬암드",
    brandUrl: "https://musclearmed.com/",
  },
  {
    brandname: "랩스온랩스",
    brandUrl: "https://smartstore.naver.com/rsrs",
  },
  {
    brandname: "Hdex",
    brandUrl: "https://hdex.co.kr/",
  },
  {
    brandname: "잭시미스",
    brandUrl: "https://xexymix.com/",
  },
  {
    brandname: "RSPT",
    brandUrl: "https://smartstore.naver.com/rspt",
  },
  {
    brandname: "피지코어패럴",
    brandUrl: "https://smartstore.naver.com/fizico",
  },
  {
    brandname: "아던트소울",
    brandUrl: "https://ardentsoul.co.kr/",
  },
  {
    brandname: "멧블랙",
    brandUrl: "https://smartstore.naver.com/matblack/",
  },
  {
    brandname: "피지컬가먼츠",
    brandUrl: "https://physicalgarments.com/",
  },
  {
    brandname: "액츄얼라이즈",
    brandUrl: "https://smartstore.naver.com/actualize",
  },
  {
    brandname: "RANK",
    brandUrl: "https://the-rank.co.kr/",
  },
  {
    brandname: "고룩",
    brandUrl: "https://smartstore.naver.com/go_look",
  },
  {
    brandname: "UNF",
    brandUrl: "https://smartstore.naver.com/universal_fit",
  },
  {
    brandname: "골드앤머신",
    brandUrl: "https://goldennmachine.kr/",
  },
  {
    brandname: "언브로큰",
    brandUrl: "https://www.unbroken.co.kr/",
  },
  {
    brandname: "베르만어패럴",
    brandUrl: "https://smartstore.naver.com/vermann",
  },
  {
    brandname: "머스콜로",
    brandUrl: "https://muscoloadm.cafe24.com/",
  },
  {
    brandname: "VENAFIT",
    brandUrl: "https://smartstore.naver.com/venafit",
  },
  {
    brandname: "BRUNK",
    brandUrl: "https://brunk.kr/",
  },
  {
    brandname: "하드지머",
    brandUrl: "https://smartstore.naver.com/addtobag",
  },
  {
    brandname: "고포잇",
    brandUrl: "https://go4itmall.com/",
  },
  {
    brandname: "develop",
    brandUrl: "https://developofficial.com/",
  },
  {
    brandname: "DEFEAT",
    brandUrl: "https://defeat.co.kr/",
  },
  {
    brandname: "허그본",
    brandUrl: "https://hugvone.co.kr/",
  },
  {
    brandname: "발리안트",
    brandUrl: "https://m.valiant.kr/",
  },
  {
    brandname: "BSMD",
    brandUrl:
      "https://smartstore.naver.com/beastmode/?nt_source=googlewebsitetraffic&nt_medium=social&gclid=Cj0KCQiAn-2tBhDVARIsAGmStVm9NyLf6H8aPYAXxMVS6L2Kbz84v3eoTMYMPXzW6XprVvX8FVA3TpwaAjSlEALw_wcB",
  },
  {
    brandname: "카키그라도",
    brandUrl: "https://khakigrado.com/",
  },
];
export default function PageNavigate() {
  return (
    <Container maxWidth="xl">
      <Box className={styles.Text1}>
        <h2>짐웨어 바로가기</h2>
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {brandArray.map((object, index: number) => (
          <Box gridColumn="span 4" key={index}>
            <Item
              onClick={() => {
                fetch(
                  `${process.env.NEXT_PUBLIC_IP}/api/brand/click?id=${index}`
                );
              }}
            >
              <Link href={object.brandUrl}>
                <p>{object.brandname}</p>
              </Link>
            </Item>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
