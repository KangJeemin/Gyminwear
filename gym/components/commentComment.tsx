import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CommentComment = () => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteClick = () => {
    // 삭제 버튼이 클릭되면 isDeleted를 true로 설정
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
          height: "100px",
          border: 1,
        }}
      >
        ㄴ
      </Box>
      <Box
        sx={{
          width: "30px",
          height: "30px",
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
            border: 1,
          }}
        >
          강지민
        </Box>
        {/* <Typography
          variant="h5"
          gutterBottom
          sx={{
            whiteSpace: "nowrap", // 줄 바꿈 방지 스타일
          }}
        >
          h5.Headingdadadsad
        </Typography> */}

        <Box
          sx={{
            marginTop: "10px",
            width: "100%",

            border: 1,
            whiteSpace: "normal", // 줄 바꿈 방지 스타일
          }}
        >
          오운완입니디다다다다다다다다다다다다다다오운완입니디다다다다다다다다다다다다다다오운완입니디다다다다다다다다다다다다다다오운완입니디다다다다다다다다다다다다다다오운완입니디다다다다다다다다다다다다다다오운완입니디다다다다다다다다다다다다다다오운완입니디다다다다다다다다다다다다다다
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            border: 1,
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
          <Box>수정</Box>
        </Box>
      </Box>
      <Button
        variant="outlined"
        color="error"
        sx={{
          width: "10px",
          height: "80px",
        }}
        onClick={handleDeleteClick} // 삭제 버튼 클릭 시 핸들러 함수 호출
      >
        D
      </Button>
    </Box>
  );
};

export default CommentComment;
