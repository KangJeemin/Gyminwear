import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import styles from '@/styles/styles.module.css'
import Link from 'next/link'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box style={{
        display:"flex",
        width:"100%",
        height:"100%"
    }}>
        <Box className={styles.main_Margin}></Box>
        <Box style={{
            width:"100%",
            height:"100%"
        }}>
            <Box className={styles.Text1}>짐웨어 바로가기</Box>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 4">
                 <Item><Link href='https://borntowin.kr/'>본투윈</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://borntowin.kr/'>덤브스트럭</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>피지컬크라운</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>Freedom</Item>
                </Box>
                <Box gridColumn="span 2">
                 <Item>압도</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>퍼스트웨어</Item>
                </Box>
                <Box gridColumn="span 2">
                 <Item>RBW</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>짐브로</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>키네틱피플</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>B_FoB</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>머슬암드</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>랩스온랩스</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>Hdex</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>잭시미스</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>RSPT</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>피지코어패럴</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>아던트소울</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>멧블랙</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>피지컬가먼츠</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>액츄얼라이즈</Item>
                </Box>
                <Box gridColumn="span 3">
                 <Item>RANK</Item>
                </Box>
                <Box gridColumn="span 2">
                 <Item>고룩</Item>
                </Box>
                <Box gridColumn="span 3">
                 <Item>UNF</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>골드앤머신</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>언브로큰</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>베르만어패럴</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>머스콜로</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>VENAFIT</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>BRUNK</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>하드지머</Item>
                </Box>

            </Box>
        </Box>
        <Box className={styles.main_Margin}></Box>
    </Box>
  );
}