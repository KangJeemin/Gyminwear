import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "@/styles/styles.module.css";
import Image from "next/image";
import gyminwearLogo from "@/public/image/gyminwearLogo.png";
import { border, borderColor, color } from "@mui/system";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
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
            marginBottom: "20px",
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
                      paddingTop: { xl: "10px" },
                      paddingLeft: { xl: "10px" },
                      backgroundColor: "red",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "35px",
                      }}
                    >
                      제목
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "30px",
                      }}
                    >
                      작성자
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Box
                        sx={{
                          width: "50%",
                          height: "20px",
                        }}
                      >
                        날짜
                      </Box>
                      <Box
                        sx={{
                          width: "50%",
                          height: "20px",
                        }}
                      >
                        조회수
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Button variant="outlined">글쓰기</Button>
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "cetner",
        }}
      >
        <Stack spacing={10} sx={{ margin: "auto" }}>
          <Pagination count={10} shape="rounded" />
        </Stack>
      </Box>
    </Container>
  );
}
