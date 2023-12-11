import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function CommentWrtie() {
  return (
    <>
      <Box
        sx={{
          width: "5%",
          height: "300px",
        }}
      >
        ㄴ
      </Box>
      <Box
        sx={{
          width: "95%",
          height: "300px",
          border: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          id="CommentNickname"
          label="닉네임"
          variant="standard"
          sx={{ width: "300px" }}
        />
        <Box
          sx={{
            width: "100%",
            height: "200px",
          }}
        >
          <input
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              border: "none",
              color: "black",
              outline: "none", // 기본 포커스 효과 제거
            }}
            placeholder="내용을 입력하세요"
            name="comment"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "20px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            component="label"
            variant="contained"
            sx={{
              width: "70px",
              height: "40px",
            }}
          >
            등록
          </Button>
        </Box>
      </Box>
    </>
  );
}
