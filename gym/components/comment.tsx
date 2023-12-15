import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CommentComment from "@/components/commentComment";
import CommentWrtie from "./commentWrite";
import TextField from "@mui/material/TextField";

const Comment = () => {
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [isCommentOpen, setCommentOpen] = React.useState(false);

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
  const openComment = () => {
    isCommentOpen ? setCommentOpen(false) : setCommentOpen(true);
  };

  const handleDeleteClick = () => {
    // 삭제 버튼이 클릭되면 isDeleted를 true로 설정
    setIsDeleted(true);
  };

  // 만약 삭제된 상태라면 null을 반환하여 렌더링하지 않음
  if (isDeleted) {
    return null;
  }

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmitWrite}
        sx={{
          display: "flex",
          width: "100%",
          height: "auto",
          borderBottom: 1,
          marginBottom: "10px",
          fontFamily: "monospace",
          border: 1,
        }}
      >
        <Box
          sx={{
            width: "5%",
            height: "auto",
            border: 1,
          }}
        >
          이미지
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "85%",
            marginLeft: "10px",
            border: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              border: 1,
            }}
          >
            <Box
              sx={{
                marginRight: "10px",
                fontWeight: 700,
              }}
            >
              강지민
            </Box>
            <Box
              sx={{
                marginRight: "10px",
                color: "#D9D9D9",
              }}
            >
              12:42
            </Box>
          </Box>
          <TextField
            id="nickname"
            name="nickname"
            variant="standard"
            sx={{
              marginTop: "10px",
              width: "100%",
              border: 1,
              whiteSpace: "normal", // 줄 바꿈 방지 스타일
              fontSize: { xl: 20 },
            }}
          />
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
              border: 1,
            }}
          >
            <Box onClick={openComment}>답글쓰기</Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "10%",
            flexDirection: { xs: "column", xl: "row" },
          }}
        >
          <Button
            variant="outlined"
            sx={{
              minWidth: "10px",
              height: { xs: "50%", xl: "100%" },
            }}
          >
            수정
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{
              minWidth: "10px",
              height: { xs: "50%", xl: "100%" },
            }}
            onClick={handleDeleteClick} // 삭제 버튼 클릭 시 핸들러 함수 호출
          >
            삭제
          </Button>
        </Box>
      </Box>
      {isCommentOpen ? <CommentWrtie /> : null}
      <CommentComment openComment={openComment} />
    </>
  );
};

export default Comment;
