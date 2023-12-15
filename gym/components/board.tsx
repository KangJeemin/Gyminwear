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
import { useRouter } from "next/router";
type boardInfo = {
  postid: number;
  title: string;
  nickname: string;
  content: string;
};
export default function Board(props: any) {
  const router = useRouter();
  console.log(props.data);
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
            {props.data.map((object: boardInfo, index: number) => (
              <Grid xs={4} sm={4} md={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", xl: "column" },
                    width: { xs: "350px", xl: "250px" },
                    height: { xs: "100px", xl: "300px" },
                    // borderBottom: { xs: 1, xl: "none" },
                    border: 1,
                  }}
                >
                  <Box
                    sx={{
                      order: { xs: 2, md: 1 },
                      width: { xs: "30%", xl: "200px" },
                      height: { xs: "100%", xl: "200px" },
                      backgroundColor: "green",
                      marginLeft: { xl: "22px" },
                    }}
                  >
                    여기가 이미지 담겨야함
                  </Box>
                  <Box
                    sx={{
                      order: { xs: 1, md: 2 },
                      width: { xs: "70%", xl: "220px" },
                      height: { xs: "100%", xl: "100px" },
                      paddingTop: { xl: "10px" },
                      paddingLeft: { xl: "10px" },
                      fontFamily: "monospace",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "35px",
                        display: "flex",
                      }}
                    >
                      {object.title}
                      <Box
                        sx={{
                          color: "red",
                        }}
                      >
                        [2]
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "30px",
                        color: "#D9D9D9",
                      }}
                    >
                      {object.nickname}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Box
                        sx={{
                          width: "30%",
                          height: "20px",
                          fontSize: 15,
                        }}
                      >
                        조회:3
                      </Box>
                      <Box
                        sx={{
                          width: "70%",
                          height: "20px",
                          display: "flex",
                          justifyContent: "flex-end",
                          fontSize: 15,
                          marginRight: { xs: "10px" },
                        }}
                      >
                        12:56
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
          <Button
            variant="outlined"
            onClick={() => {
              router.push("/board/write");
            }}
          >
            글쓰기
          </Button>
        </Box>
      </Container>
      {props.mapcount < 5 ? null : (
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
      )}
    </Container>
  );
}
