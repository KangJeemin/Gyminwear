import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import styles from '@/styles/styles.module.css'

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
                 <Item>본투윈</Item>
                </Box>
                <Box gridColumn="span 4">
                 <Item>덤브스트럭</Item>
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
                 <Item>피지코 어패럴</Item>
                </Box>
            </Box>
        </Box>
        <Box className={styles.main_Margin}></Box>
    </Box>
  );
}