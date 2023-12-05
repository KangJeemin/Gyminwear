import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import styles from '@/styles/styles.module.css';


export default function MiniBoard() {

    return(
        <Container>
            <Container maxWidth="xl">
                <Box className={styles.Text1}>미니보드 바로가기</Box>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {[1].map((value) => (
                      <ListItem
                        key={value}
                        disableGutters
                      >
                        <Box id={styles.miniboardTextContainer}>미니보드 바로가기
                            <Box id={styles.miniboardHeaderBox}>미니보드 바로가기</Box>
                            <Box id={styles.miniboardBodyBox}>미니보드 바로가기
                                <Box id={styles.miniboardNickName}>미니보드 바로가기</Box>
                                <Box id={styles.miniboardHeart}>미니보드 바로가기</Box>
                                <Box id={styles.miniboardComment}>미니보드 바로가기</Box>
                            </Box>
                        </Box>
                        <Box id={styles.miniboardImageBox}>미니보드 바로가기</Box>
                        
                      </ListItem>
                    ))}
                </List>
            </Container>
        </Container>
    
    )
}
