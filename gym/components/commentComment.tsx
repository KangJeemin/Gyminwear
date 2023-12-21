import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DateTimeFormatter from "@/lib/dateTimeFomatter";

import Typography from "@mui/material/Typography";

const CommentComment = (props: any) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const handleModifyClick = async () => {
    const response = await fetch("http://localhost:3000/api/comment", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commentid: props.data.commentid,
        content: props.data.content,
      }),
    });
    if (response.ok) {
      alert("댓글이 수정되었습니다.");
    }
  };
  const handleDeleteClick = async () => {
    const response = await fetch("http://localhost:3000/api/comment", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commentid: props.data.commentid,
      }),
    });
    if (response.ok) {
      alert("댓글이 삭제되었습니다.");
    }
    setIsDeleted(true);
  };

  // 만약 삭제된 상태라면 null을 반환하여 렌더링하지 않음
  if (isDeleted) {
    return null;
  }

  return (
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
        ㄴ
      </Box>
      <Box
        sx={{
          width: "10%",
          height: "auto",
          color: "#D9D9D9",

          border: 1,
        }}
      >
        <AccountCircleIcon
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "80%",
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
            {props.data.nickname}
          </Box>
          <Box
            sx={{
              marginRight: "10px",
              color: "#D9D9D9",
            }}
          >
            <DateTimeFormatter dateString={props.data.date} />
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
          {props.data.content}
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            border: 1,
          }}
        >
          <Box onClick={props.openComment}>답글쓰기</Box>
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
  );
};

export default CommentComment;
