import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CommentWrtie from "./commentWrite";
import Input from "@mui/material/Input";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DateTimeFormatter from "@/lib/dateTimeFomatter";
import DateTimeFommaterINComment from "@/lib/dateTimeFommaterINComment";
import { useRouter } from "next/router";
import useSession from "@/lib/useSession";
import type { commentInfo, addChildComment } from "@/interface/board";
import Modal from "./modal";
import Container from "@mui/material/Container";
import ClientAPIReq from "@/lib/ClientAPIReq";

interface commnetComponent {
  data: commentInfo;
  postid: number;
  parentComent: boolean;
  parentData?: addChildComment;
  setCommentRerender: Function;
}
const Comment = ({
  data,
  postid,
  parentComent,
  parentData,
  setCommentRerender,
}: commnetComponent) => {
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [isCommentOpen, setCommentOpen] = React.useState(false);
  const [comment, setComment] = React.useState(data.content);
  const [commentModify, setCommentModify] = React.useState(false);
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const router = useRouter();
  const { session } = useSession();
  // useEffect(() => {
  //   console.log(props.parentComentId);
  // });
  useEffect(() => {}, [commentModify]);
  const openComment = () => {
    isCommentOpen ? setCommentOpen(false) : setCommentOpen(true);
  };
  const handleUpdateClick = async (event: React.FormEvent<HTMLFormElement>) => {
    //commentModify가 true일 경우만 FormEvent 실행.
    if (commentModify) {
      event.preventDefault();
    }

    const formData = new FormData(event.currentTarget);
    const { commentcontent } = Object.fromEntries(formData.entries());

    const APIreq = {
      url: `${process.env.NEXT_PUBLIC_IP}/api/comment`,
      method: "PUT",
      BodyJSON: {
        commentid: data.commentid,
        content: commentcontent as string,
      },
    };
    const response = await ClientAPIReq(APIreq);
    if (response.ok) {
      alert("댓글이 수정되었습니다.");
      setCommentModify(false);
    }
  };
  const handleDeleteClick = async () => {
    const APIreq = {
      url: `${process.env.NEXT_PUBLIC_IP}/api/comment`,
      method: "DELETE",
      BodyJSON: {
        commentid: data.commentid,
      },
    };
    const response = await ClientAPIReq(APIreq);
    if (response.ok) {
      alert("댓글이 삭제되었습니다.");
      router.reload();
    }
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
        onSubmit={handleUpdateClick}
        sx={{
          display: "flex",
          width: "100%",
          height: "auto",
          marginBottom: "10px",
          fontFamily: "monospace",
          borderRadius: "20px",
        }}
      >
        {parentComent ? (
          <Box
            sx={{
              width: "10%",
              height: "auto",
              border: 1,
              color: "#D9D9D9",
              borderRadius: "20px 0px 0px 20px",
            }}
          >
            <AccountCircleIcon
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        ) : (
          <>
            <Box
              sx={{
                width: "5%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                fontSize: 25,
              }}
            ></Box>
            <Box
              sx={{
                width: "10%",
                height: "auto",
                color: "#D9D9D9",
                backgroundColor: "#F5F5F5",
                borderRadius: "20px 0px 0px 20px",
              }}
            >
              <AccountCircleIcon
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            width: parentComent ? "85%" : "80%",
            height: "auto",
            color: "#D9D9D9",
            borderTop: 1,
            borderRight: 1,
            borderBottom: 1,
            borderRadius: "0px 20px 20px 0px",
            backgroundColor: parentComent ? "" : "#F5F5F5",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                marginRight: "10px",
                color: "black",
                fontWeight: 700,
              }}
            >
              {data.nickname}
            </Box>

            <Box
              sx={{
                marginRight: "10px",
                color: "#D9D9D9",
              }}
            >
              <DateTimeFommaterINComment dateString={data.date} />
            </Box>
          </Box>
          <Input
            disableUnderline //MUI Input border-bottom 제거
            multiline
            inputProps={{ maxLength: 300 }}
            sx={{
              marginTop: "10px",
              width: "100%",
              whiteSpace: "normal", // 줄 바꿈 방지 스타일
              fontSize: { xl: 20, xs: 14 },

              pointerEvents: commentModify ? "" : "none",
              outline: "none",
            }}
            placeholder="댓글은 300자까지 입력 가능합니다."
            defaultValue={data.content}
            value={commentModify ? null : data.content}
            onChange={(e) => setComment(e.target.value)}
            name="commentcontent"
          ></Input>
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
            }}
          >
            {!commentModify && <Box onClick={openComment}>답글쓰기</Box>}
          </Box>
        </Box>
        {session.nickname === data.nickname && (
          <Box
            sx={{
              display: "flex",
              width: "10%",
              flexDirection: { xs: "column", xl: "row" },
            }}
          >
            {!commentModify && (
              <>
                <Button
                  variant="outlined"
                  sx={{
                    minWidth: "10px",
                    height: { xs: "40px", xl: "100%" },
                    fontSize: 10,
                  }}
                  onClick={() => {
                    setCommentModify(true);
                  }}
                >
                  수정
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    minWidth: "10px",
                    height: { xs: "40px", xl: "100%" },
                    fontSize: 10,
                  }}
                  onClick={() => setModalOpen((preState) => !preState)}
                >
                  삭제
                </Button>
              </>
            )}
            <Modal
              isOpen={isModalOpen}
              onClose={() => setModalOpen((preState) => !preState)}
            >
              <Container>
                <h3>댓글을 삭제하시겠습니까?</h3>
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
                      handleDeleteClick();
                    }}
                  >
                    예
                  </Button>
                  <Button
                    component="label"
                    variant="contained"
                    size="small"
                    onClick={() => setModalOpen((preState) => !preState)}
                  >
                    아니오
                  </Button>
                </Box>
              </Container>
            </Modal>
            {commentModify && (
              <>
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    minWidth: "10px",
                    height: { xs: "50%", xl: "100%" },
                  }}
                >
                  완료
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    minWidth: "10px",
                    height: { xs: "50%", xl: "100%" },
                  }}
                  onClick={() => setCommentModify(false)}
                >
                  취소
                </Button>
              </>
            )}
          </Box>
        )}
      </Box>
      {isCommentOpen ? (
        <CommentWrtie
          postid={data.postid}
          commentid={parentComent ? data.commentid : parentData?.commentid}
        />
      ) : null}
    </>
  );
};

export default Comment;
