import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from '@/styles/styles.module.css';

export default function MiniBoard() {
  return (
    <Container>
      <Container>
        <Box className={styles.Text1}>미니보드 바로가기</Box>
        <Box id={styles.miniboardMainContainer}>
          <Box id={styles.miniboardTextContainer}>
            미니보드 바로가기
            <Box id={styles.miniboardHeaderBox}>미니보드 바로가기</Box>
            <Box id={styles.miniboardBodyBox}>
              미니보드 바로가기
              {/* <Box id={styles.miniboardNickName}>미니보드 바로가기</Box> */}
              {/* <Box id={styles.miniboardHeart}>미니보드 바로가기</Box> */}
              {/* <Box id={styles.miniboardComment}>미니보드 바로가기</Box> */}
            </Box>
          </Box>
          <Box id={styles.miniboardImageBox}>미니보드 바로가기</Box>
        </Box>
      </Container>
    </Container>
  );
}
