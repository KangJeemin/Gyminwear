import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from '@/styles/styles.module.css';

export default function MiniBoard() {
    return (
        <Container>
            <Container>
                <Box className={styles.miniboardTextContainer}>
                    {/* miniboardHeaderBox */}
                    <Box id={styles.miniboardHeaderBox}>미니보드 바로가기 헤더</Box>
                    
                    {/* miniboardBodyBox */}
                    <Box id={styles.miniboardBodyBox}>
                        미니보드 바로가기 바디
                        {/* miniboardNickName */}
                        {/* <Box id={styles.miniboardNickName}>미니보드 바로가기 닉네임</Box> */}
                        
                        {/* miniboardHeart */}
                        {/* <Box id={styles.miniboardHeart}>미니보드 바로가기 하트</Box> */}
                        
                        {/* miniboardComment */}
                        {/* <Box id={styles.miniboardComment}>미니보드 바로가기 코멘트</Box> */}
                    </Box>
                </Box>
                <Box id={styles.miniboardImageBox}>미니보드 바로가기 이미지</Box>
            </Container>
        </Container>
    );
}
