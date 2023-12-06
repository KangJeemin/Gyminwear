import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from '@/styles/styles.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import Image from 'next/image';
import gyminwearLogo from "@/public/image/gyminwearLogo.png"
import { border, borderColor, color } from '@mui/system';
export default function MiniBoard() {
  return (
    <Container>
      <Container maxWidth="xl">
        <Box maxWidth="xl"sx={{
          color:"black",
          padding:1,
          fontWeight:"bold"
        }}>미니보드 바로가기</Box>
        <Box maxWidth="xl" sx={{
          display:"flex",
          color:"black",
          borderBottom:1,
          borderColor: "#D9D9D9", 
        }}>
          <Box sx={{
            width:"80%",
            display:"flex",
            flexDirection:"column"
          }}>
            <Box sx={{
              width:"100%",
              display: "flex",
              alignItems: "center",
              height:{xs:"37.5px",md:"75px"},
            }}>제목</Box>
            <Box sx={{
              width:"100%",
              height:{xs:"37.5px",md:"75px"},
              display:"flex",
              alignItems: "center"
            }}>
              <Box sx={{
                color:"#D9D9D9"
              }}>닉네임</Box>
              <Box sx={{
                width:{xs:"20px",md:"70%"}
              }}></Box>
              <Box sx={{
              }}><FavoriteBorderIcon/></Box>
              <Box sx={{}}>3</Box>
              <Box sx={{
                paddingLeft:{xs:"10px",md:"20px"}
              }}><TextsmsOutlinedIcon/></Box>
              <Box sx={{}}>3</Box>
            </Box>
          </Box>
          <Box sx={{
            width:"20%",
          }}>
              <Box sx={{
                width:{xs:"100%",md:"80%"},
                height:{xs:"100%",md:"80%"},
                position:"relative",
                display:"flex",
                alignItems: "center",
                justifyContent: "center",

              }}>
                <Image
                 src={gyminwearLogo}
                 alt='이미지 표시 불가'
                 layout='fill'
                 />
              </Box>
            </Box>
        </Box>
      </Container>
    </Container>
  );
}
