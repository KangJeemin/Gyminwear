import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from '@/styles/styles.module.css';


export default function MiniBoard() {

    return(
        <Container maxWidth="xl">
            <Box className={styles.Text1}>미니보드 바로가기</Box>
        </Container>
    
    )
}
