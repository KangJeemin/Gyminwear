import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CommentComment from "@/components/commentComment";
import CommentWrtie from "./commentWrite";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import useSession from "@/lib/useSession";

import { GetServerSidePropsContext } from "next";

const Comment = () => {
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [isCommentOpen, setCommentOpen] = React.useState(false);
  const [commentInfo, setCommentInfo] = React.useState("");
  const { session } = useSession();

  // const handleSubmitWrite = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const { title, nickname } = Object.fromEntries(data.entries());
  //   const sendWrtie = {
  //     title,
  //     nickname,
  //   };
  //   const response = await fetch("http://localhost:3000/api/board", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       title: title,
  //       nickname: nickname,
  //     }),
  //   });
  //   console.log(response.json());
  // };
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
          <Box
            sx={{
              marginTop: "10px",
              width: "100%",
              border: 1,
              whiteSpace: "normal", // 줄 바꿈 방지 스타일
              fontSize: { xl: 20 },
            }}
          >
            오운완입니디다다다다다다다다다다다다다다오운완입니디다다다다다다다다다다다다다다오운완입니디다다다다다다다다다다다다다다오운완입니디다다다다다다다다다다다다다다
          </Box>
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
      {/* {isCommentOpen ? <CommentWrtie /> : null} */}
      <CommentComment openComment={openComment} />
      <Box
        component="form"
        noValidate
        // onSubmit={handleSubmitWrite}
        sx={{
          width: "100%",
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
          value={session.nickname}
          sx={{ width: "300px" }}
        />
        <Box
          sx={{
            width: "100%",
            height: "200px",
          }}
        >
          <Input
            multiline
            inputProps={{ maxLength: 300 }}
            sx={{
              width: "100%",
              height: "200px",
              backgroundColor: "white",
              // border: "none",
              color: "black",
            }}
            placeholder="댓글은 300자까지 입력 가능합니다."
            name="commentcontent"
          ></Input>
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
    </>
  );
};

export default Comment;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const { page } = context.query;

  const res = await fetch(`http://localhost:3000/comments`);
  const data = await res.json();

  console.log("data=", data);

  return {
    props: {
      data: data,
    },
  };
}
