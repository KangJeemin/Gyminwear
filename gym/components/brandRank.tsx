import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "@/styles/styles.module.css";
import Container from "@mui/material/Container";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";

function brandRank({ rank, brand }: any) {
  //   if (!(rank || brand)) {
  //     return (
  //       <Box sx={{ width: 300 }}>
  //         <Skeleton />
  //         <Skeleton animation="wave" />
  //         <Skeleton animation={false} />
  //       </Box>
  //     );
  //   } else {
  return (
    <Container sx={{ marginTop: 1 }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          color: "black",
          fontWeight: "bold",
          justifyContent: "flex-end",
        }}
      >
        <h2 style={{ fontSize: 15, color: "gray", marginRight: 10 }}>
          오늘의 브랜드 클릭 순위
        </h2>
        <span>
          <p style={{ fontWeight: "bold" }}>1등 :</p>
        </span>
        <span style={{ marginRight: 20 }}>본투윈</span>
        <span style={{ color: "red" }}> &#9650;</span>
        <span>3</span>
        {/* <span style={{ color: "blue" }}>&#9660;</span> */}
      </Box>
    </Container>
  );
  //   }
}

export default brandRank;
