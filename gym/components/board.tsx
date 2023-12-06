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
            spacing={{ xs: 1, xl: 2 }}
            columns={{ xs: 4, sm: 8, md: 16 }}
          >
            {Array.from(Array(16)).map((_, index) => (
              <Grid xs={4} sm={4} md={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", xl: "column" },
                    width: { xs: "350px", xl: "500px" },
                    height: { xs: "100px", xl: "300px" },
                  }}
                >
                  <Box
                    sx={{
                      order: { xs: 2, md: 1 },
                      width: { xs: "20%", xl: "250px" },
                      height: { xs: "100%", xl: "200px" },
                      backgroundColor: "green",
                    }}
                  >
                    여기가 이미지 담겨야함
                  </Box>
                  <Box
                    sx={{
                      order: { xs: 1, md: 2 },
                      width: { xs: "80%", xl: "250px" },
                      height: { xs: "100%", xl: "100px" },
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
