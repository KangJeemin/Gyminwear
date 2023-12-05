import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from '@/styles/styles.module.css';

export default function MiniBoard() {
  return (
    <Container>
      <Container maxWidth="xl">
        <Box maxWidth="xl"sx={{
          color:1,
          padding:1,
          fontWeight:"bold"
        }}>미니보드 바로가기</Box>
        <Box maxWidth="xl" sx={{
          backgroundColor:"green",
          display:"flex"
        }}>
          <Box sx={{
            width:"80%",
            backgroundColor:"yellow",
            display:"flex",
            flexDirection:"column"
          }}>
            <Box sx={{
              width:"100%",
              height:"75px",
              backgroundColor:"red"
            }}>HeaderBox</Box>
            <Box sx={{
              width:"100%",
              height:"75px",
              backgroundColor:"blue"
            }}>BodyBox
              {/* <Box id={styles.miniboardNickName}>미니보드 바로가기</Box> */}
              {/* <Box id={styles.miniboardHeart}>미니보드 바로가기</Box> */}
              {/* <Box id={styles.miniboardComment}>미니보드 바로가기</Box> */}
            </Box>
          </Box>
          <Box sx={{
            width:"20%"
          }}>ImageBox</Box>
        </Box>
      </Container>
    </Container>
  );
}
