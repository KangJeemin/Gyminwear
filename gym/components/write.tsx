import * as React from "react";
import DoubleContainer from "./doubleContainer";
import Box from "@mui/material/Box";

export default function write() {
  return (
    <DoubleContainer>
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
        글쓰기
      </Box>
    </DoubleContainer>
  );
}
