import * as React from "react";
import DoubleContainer from "./doubleContainer";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";

export default function Read() {
  return (
    <DoubleContainer>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "50px",
          color: "black",
          marginTop: "20px",
          fontWeight: "bold",
          borderBottom: 1,
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            width: "70%",
          }}
        >
          본투윈 입고 운동 했습니다
        </Box>
        <Box
          sx={{
            width: "10%",
          }}
        >
          작성자:강지민
        </Box>
        <Box sx={{ width: "10%" }}>조회수:30</Box>
        <Box sx={{ width: "10%" }}>12:45</Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: "500px", xl: "800px" },
          marginTop: "20px",
          borderBottom: 1,
        }}
      >
        글 내용 작성{" "}
      </Box>
      <Box
        sx={{
          fontWeight: "bold",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        댓글(0)
      </Box>
    </DoubleContainer>
  );
}
