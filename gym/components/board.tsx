import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "@/styles/styles.module.css";
import Image from "next/image";
import gyminwearLogo from "@/public/image/gyminwearLogo.png";
import { border, borderColor, color } from "@mui/system";
export default function board() {
  return (
    <Container>
      <Container
        maxWidth="xl"
        sx={{
          color: "black",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50px",
            color: "black",
            marginTop: "20px",
            fontWeight: "bold",
            borderBottom: 1,
          }}
        >
          게시판
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 16 }}
          >
            {Array.from(Array(16)).map((_, index) => (
              <Grid xs={4} sm={4} md={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", xl: "column" },
                    width: "500px",
                    height: "300px",
                  }}
                >
                  <Box
                    sx={{
                      order: { xs: 2, md: 1 },
                      width: "50%",
                      height: "50%",
                      backgroundColor: "green",
                    }}
                  >
                    여기가 이미지 담겨야함
                  </Box>
                  <Box
                    sx={{
                      order: { xs: 1, md: 2 },
                      width: "50%",
                      height: "50%",
                      backgroundColor: "red",
                    }}
                  >
                    2
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
}
