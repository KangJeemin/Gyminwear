import React from "react";
import Box from "@mui/material/Box";
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
          fontSize: 14,
          height: 25,
        }}
      >
        {/* <h2 style={{ fontSize: 15, color: "gray", marginRight: 10 }}>
          오늘의 브랜드 클릭 순위
        </h2> */}
        <span>
          <p style={{ fontWeight: "bold" }}>1등 :</p>
        </span>
        <Box sx={{ width: { xs: "30%", md: "10%" } }}>프리덤애슬레틱</Box>
        <span style={{ color: "red" }}>&#9650;</span>
        <span>3</span>
        {/* <span style={{ color: "blue" }}>&#9660;</span> */}
      </Box>
    </Container>
  );
  //   }
}

export default brandRank;
