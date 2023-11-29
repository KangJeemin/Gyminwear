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
                 <Item><Link href='https://dumbstruck.kr/'>덤브스트럭</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://smartstore.naver.com/physicalcrown'>피지컬크라운</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://www.freedomdom.kr/'>프리덤에슬레틱</Link></Item>
                </Box>
                <Box gridColumn="span 2">
                 <Item><Link href='https://overwhelm.co.kr/'>압도</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://firstwear.kr/'>퍼스트웨어</Link></Item>
                </Box>
                <Box gridColumn="span 2">
                 <Item><Link href='https://www.rbwapparel.com/'>RBW</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://gymbro.kr/'>짐브로</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='http://www.kineticpeople.co.kr/'>키네틱피플</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://www.befirstorbest.com/'>B_FoB</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://musclearmed.com/'>머슬암드</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://smartstore.naver.com/rsrs'>랩스온랩스</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://hdex.co.kr/'>Hdex</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://xexymix.com/'>잭시미스</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://smartstore.naver.com/rspt'>RSPT</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://smartstore.naver.com/fizico'>피지코어패럴</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://ardentsoul.co.kr/'>아던트소울</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://smartstore.naver.com/matblack/'>멧블랙</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://physicalgarments.com/'>피지컬가먼츠</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://smartstore.naver.com/actualize'>액츄얼라이즈</Link></Item>
                </Box>
                <Box gridColumn="span 3">
                 <Item><Link href='https://the-rank.co.kr/'>RANK</Link></Item>
                </Box>
                <Box gridColumn="span 2">
                 <Item><Link href='https://smartstore.naver.com/go_look'>고룩</Link></Item>
                </Box>
                <Box gridColumn="span 3">
                 <Item><Link href='https://smartstore.naver.com/universal_fit'>UNF</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://goldennmachine.kr/'>골드앤머신</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://www.unbroken.co.kr/'>언브로큰</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://smartstore.naver.com/vermann'>베르만어패럴</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://muscoloadm.cafe24.com/'>머스콜로</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://smartstore.naver.com/venafit'>VENAFIT</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://brunk.kr/'>BRUNK</Link></Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item><Link href='https://smartstore.naver.com/addtobag'>하드지머</Link></Item>
                </Box>
            </Box>
        </Box>
        <Box className={styles.main_Margin}></Box>
    </Box>
  );
}