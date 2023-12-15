import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function CommentWrtie() {
  const handleSubmitWrite = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { title, nickname } = Object.fromEntries(data.entries());
    const sendWrtie = {
      title,
      nickname,
    };
    const response = await fetch("http://localhost:3000/api/board", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        nickname: nickname,
      }),
    });
    console.log(response);
  };
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmitWrite}
      sx={{
        width: "100%",
        height: "300px",
        display: "flex",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          width: "5%",
          height: "100%",
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
          name="commentnickname"
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
              width: "200px",
              height: "100%",
              backgroundColor: "white",
              // border: "none",
              color: "black",
              outline: "none", // 기본 포커스 효과 제거
            }}
            placeholder="내용을 입력하세요"
            name="commentcontent"
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
            type="submit"
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
    </Box>
  );
}
