import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from '@/styles/styles.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
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
              height:{xs:"37.5px",md:"75px"},
              backgroundColor:"red"
            }}>HeaderBox</Box>
            <Box sx={{
              width:"100%",
              height:{xs:"37.5px",md:"75px"},
              backgroundColor:"blue",
              display:"flex",
            }}>
              <Box sx={{}}>닉네임</Box>
              <Box sx={{
                background:"red"
              }}><FavoriteBorderIcon/></Box>
              <Box sx={{
                background:"purple"
              }}><TextsmsOutlinedIcon/></Box>
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
