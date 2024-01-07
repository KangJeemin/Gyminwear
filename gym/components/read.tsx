import * as React from "react";
import DoubleContainer from "./doubleContainer";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import Comment from "./comment";
import { useRouter } from "next/router";
import Modal from "./modal";
import WestIcon from "@mui/icons-material/West";
import parse from "html-react-parser";
import useSession from "@/lib/useSession";
import DateTimeFormatter from "@/lib/dateTimeFomatter";
import DateTimeFormatterInBoard from "@/lib/dateTimeFommatterINBoard";

type readInfo = {
  title: string;
  nickname: string;
  content: string;
  viewcount: number;
  date: string;
  commentcount: number;
};
export default function Read(props: any) {
  const { session } = useSession();
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isCommentOpen, setCommentlOpen] = React.useState(false);
  const router = useRouter();

  const handleSubmitDelete = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_IP}/api/board`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postid: props.data[0].postid,
      }),
    });
    if (response.ok) {
      alert("게시물이 삭제되었습니다.");
    }
  };
  const handlePostDataToWrite = async () => {
    // 데이터를 상태로 저장
    router.replace({
      pathname: "write",
      query: { id: props.data[0].postid },
    });
  };
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
          <Box
            sx={{
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              window.history.back();
            }}
          >
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
              display: "flex",
            }}
          >
            <DateTimeFormatterInBoard dateString={props.data[0].date} />
          </Box>
        </Box>
      </Box>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Container>
          <h3>게시글을 삭제하시겠습니까? git</h3>
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
                handleSubmitDelete();
                router.push(`${process.env.NEXT_PUBLIC_IP}/board`);
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
          height: "auto",
          marginTop: "30px",
          overflowY: "scroll",
          color: "black",
        }}
      >
        {parse(props.data[0].content)}
      </Box>
      {session.nickname === props.data[0].nickname ? (
        <>
          <Box sx={{ paddingTop: "10px", display: "flex" }}>
            <Box sx={{ width: { xl: "90%" } }}></Box>
            <Button component="label" variant="contained" onClick={openModal}>
              삭제
            </Button>
            <Box sx={{ width: { xs: "90%", xl: "5%" } }}></Box>
            <Button
              component="label"
              variant="contained"
              onClick={handlePostDataToWrite}
            >
              수정
            </Button>
          </Box>
        </>
      ) : null}

      <Box
        sx={{
          fontWeight: "bold",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        댓글({props.data[0].commentcount})
      </Box>
    </DoubleContainer>
  );
}
