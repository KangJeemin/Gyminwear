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

type readInfo = {
  title: string;
  nickname: string;
  content: string;
  viewcount: number;
  date: string;
  commentcount: number;
};
export default function Read(props: any) {
  console.log("props=", props);
  const { session } = useSession();
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isCommentOpen, setCommentlOpen] = React.useState(false);
  const router = useRouter();

  const handleSubmitDelete = async () => {
    const response = await fetch("http://localhost:3000/api/board", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postid: props.data[0].postid,
      }),
    });
  };
  // const handleSubmitWrite = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const { commentcontent } = Object.fromEntries(data.entries());

  //   const response = await fetch("http://localhost:3000/api/comment", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       postid: props.data[0].postid,
  //       content: commentcontent,
  //       nickname: session.nickname,
  //     }),
  //   });
  //   console.log(response);
  // };
  // console.log(props);
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
                handleSubmitDelete();
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
        {parse(props.data[0].content)}
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
        댓글({props.data[0].commentcount})
      </Box>
    </DoubleContainer>
  );
}
