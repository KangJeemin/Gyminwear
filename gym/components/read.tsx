import * as React from "react";
import DoubleContainer from "./doubleContainer";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Modal from "./modal";
import WestIcon from "@mui/icons-material/West";
import parse from "html-react-parser";
import useSession from "@/lib/useSession";
import DateTimeFormatterInBoard from "@/lib/dateTimeFommatterINBoard";
import type { readInfo } from "@/interface/board";
import ClientAPIReq from "@/lib/ClientAPIReq";

interface readProps {
  data: Array<readInfo>;
}

function Read({ data }: readProps) {
  const { session } = useSession();
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isCommentOpen, setCommentlOpen] = React.useState(false);
  const router = useRouter();
  const { postid, title, nickname, content, viewcount, date, commentcount } =
    data[0];
  const handleSubmitDelete = async () => {
    const APIReqObject = {
      url: `${process.env.NEXT_PUBLIC_IP}/api/board`,
      method: "DELETE",
      BodyJSON: {
        postid: postid,
      },
    };
    const response = await ClientAPIReq(APIReqObject);
    if (response.ok) {
      alert("게시물이 삭제되었습니다.");
    }
  };
  const handlePostDataToWrite = async () => {
    // 데이터를 상태로 저장
    router.replace({
      pathname: "write",
      query: { id: postid },
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
          {title}
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
              fontSize: { xl: 17, xs: 10 },
            }}
          >
            작성자:{nickname}
          </Box>
          <Box
            sx={{
              width: { xs: "30%", xl: "200px" },
              fontSize: { xl: 17, xs: 10 },
            }}
          >
            조회수:{viewcount}
          </Box>
          <Box
            sx={{
              width: { xs: "40%", xl: "300px" },
              fontSize: { xl: 17, xs: 10 },
              display: "flex",
            }}
          >
            <DateTimeFormatterInBoard dateString={date} />
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
                router.push(`${process.env.NEXT_PUBLIC_IP}/board?page=1`);
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
          width: { xs: "320px", xl: "320px" },
          height: "auto",
          marginTop: "30px",
          color: "black",
        }}
      >
        {parse(content)}
      </Box>
      {session.nickname === nickname || session.auth === "y" ? (
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
        댓글({commentcount})
      </Box>
    </DoubleContainer>
  );
}
export default React.memo(Read);
