import * as React from "react";
import DoubleContainer from "./doubleContainer";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Comment from "./comment";
import { useRouter } from "next/router";
import Modal from "./modal";
import QuillWrapper from "./quillWrapper";
import WestIcon from "@mui/icons-material/West";

type readInfo = {
  title: string;
  nickname: string;
  content: string;
  viewcount: number;
  date: string;
  commentcount: number;
};
export default function Read(props: any) {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isCommentOpen, setCommentlOpen] = React.useState(false);
  const router = useRouter();
  console.log(props);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const openComment = () => {
    setModalOpen(true);
  };

  const closeComment = () => {
    setModalOpen(false);
  };
  return (
    <DoubleContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "50px",
          color: "black",
          marginTop: "20px",
          fontWeight: "bold",
          fontFamily: "monospace",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          <Box>
            <WestIcon />
          </Box>
          {props.data[0].title}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "10px",
            // marginBottom: "30px",
            // paddingBottom: "20px",
            borderBottom: 1,
          }}
        >
          <Box
            sx={{
              width: { xs: "30%", xl: "200px" },
            }}
          >
            작성자:{props.data[0].nickname}
          </Box>
          <Box
            sx={{
              width: { xs: "30%", xl: "200px" },
            }}
          >
            조회수:{props.data[0].viewcount}
          </Box>
          <Box
            sx={{
              width: { xs: "30%", xl: "200px" },
            }}
          >
            날짜:{props.data[0].date}
          </Box>
        </Box>
      </Box>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Container>
          <h3>게시글을 삭제하시겠습니까?</h3>
          <h5></h5>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              paddingTop: "20px",
            }}
          >
            <Button
              component="label"
              variant="contained"
              size="small"
              onClick={() => {
                router.push("/");
              }}
            >
              예
            </Button>
            <Button
              component="label"
              variant="contained"
              size="small"
              onClick={closeModal}
            >
              아니오
            </Button>
          </Box>
        </Container>
      </Modal>
      {/* <QuillWrapper content={props.data[0].content} /> */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "500px", xl: "800px" },
          marginTop: "30px",
          borderBottom: 1,
        }}
      >
        {props.data[0].content}
      </Box>
      <Box sx={{ paddingTop: "10px", display: "flex" }}>
        <Box sx={{ width: { xl: "90%" } }}></Box>
        <Button component="label" variant="contained" onClick={openModal}>
          삭제
        </Button>
        <Box sx={{ width: { xs: "90%", xl: "5%" } }}></Box>
        <Button component="label" variant="contained">
          수정
        </Button>
      </Box>
      <Box
        sx={{
          fontWeight: "bold",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {props.data[0].commentcount}
      </Box>
      <Comment />
      <Comment />
      <Box
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
    </DoubleContainer>
  );
}
