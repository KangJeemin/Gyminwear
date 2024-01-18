import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import DateTimeFormatter from "@/lib/dateTimeFomatter";
import { extractFirstImageUrl2 } from "@/lib/extractFirstImageUrl";
import useSession from "@/lib/useSession";
import gyminwearImageLogo from "@/public/image/gyminwearLogo.png";
import type { boardInfo, boardProps } from "@/interface/board";

interface boardComponentProps extends boardProps {
  mapcount: number;
}
export default function Board(props: boardComponentProps) {
  const router = useRouter();
  const { session } = useSession();
  const getImageUrl = (Imagedummy: string) => {
    if (extractFirstImageUrl2(Imagedummy)) {
      return extractFirstImageUrl2(Imagedummy);
    } else {
      return gyminwearImageLogo;
    }
  };
  const handlePageChange = (page: number) => {
    console.log("page=", page);
    router.push(`${process.env.NEXT_PUBLIC_IP}/board?page=${page}`);
  };
  return (
    <Container>
      <Container
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
            cursor: "pointer",
          }}
          onClick={() => {
            router.push(`${process.env.NEXT_PUBLIC_IP}/board?page=1`);
          }}
        >
          게시판
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, xl: 2 }}
            columns={{ xs: 4, sm: 4, md: 20 }}
          >
            {props.data
              .slice(0, props.mapcount)
              .map((object: boardInfo, index: number) => (
                <Grid
                  xs={4}
                  sm={4}
                  md={5}
                  key={index}
                  onClick={() => {
                    router.push(
                      `${process.env.NEXT_PUBLIC_IP}/board/read?id=${object.postid}`
                    );
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "row", xl: "column" },
                      width: { xs: "100%", xl: "auto" },
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
                        marginLeft: { xl: "22px" },
                        position: "relative",
                        backgroundColor: "white",
                      }}
                    >
                      <Image
                        src={getImageUrl(object.content) || ""}
                        alt="유저가 올린 사진"
                        layout="fill"
                      />
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
                        <h4>{object.title}</h4>
                        <Box
                          sx={{
                            color: "red",
                          }}
                        >
                          [{object.commentcount}]
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: "30px",
                          color: "#8E8E8E",
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
                          <h5>조회:{object.viewcount}</h5>
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
                          <DateTimeFormatter dateString={object.date} />
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
              //로그인이 되어 있을 경우에만 글쓰기 가능.
              if (session.isLoggedIn) {
                router.push(`${process.env.NEXT_PUBLIC_IP}/board/write`);
              } else {
                alert("로그인 후 이용해주세요.");
                router.push(`${process.env.NEXT_PUBLIC_IP}/login`);
              }
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
            <Pagination
              count={Math.floor(props.data[0].pagecount / 20) + 1}
              shape="rounded"
              onChange={(event, page) => {
                handlePageChange(page);
              }}
            />
          </Stack>
        </Box>
      )}
    </Container>
  );
}
