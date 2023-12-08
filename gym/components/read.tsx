import * as React from "react";
import DoubleContainer from "./doubleContainer";
import Box from "@mui/material/Box";

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
          marginBottom: "20px",
        }}
      >
        <Box sx={{}}>제목</Box>
        <Box sx={{}}>제목</Box>
        <Box sx={{}}>제목</Box>
      </Box>
    </DoubleContainer>
  );
}
