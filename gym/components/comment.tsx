import * as React from "react";
import Box from "@mui/material/Box";

export default function Comment() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100px",
        borderBottom: 1,
        marginBottom: "10px",
      }}
    >
      <Box
        sx={{
          width: "30px",
          height: "30px",
        }}
      >
        이미지
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          marginLeft: "10px",
        }}
      >
        <Box>작성자</Box>
        <Box
          sx={{
            marginTop: "10px",
          }}
        >
          작성내용
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
          }}
        >
          <Box
            sx={{
              marginRight: "10px",
            }}
          >
            2023.11.21
          </Box>
          <Box
            sx={{
              marginRight: "10px",
            }}
          >
            12:42
          </Box>
          <Box>답글쓰기</Box>
        </Box>
      </Box>
    </Box>
  );
}
