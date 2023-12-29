import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CommentComment from "@/components/commentComment";
import CommentWrtie from "./commentWrite";
import Input from "@mui/material/Input";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DateTimeFormatter from "@/lib/dateTimeFomatter";
import { useRouter } from "next/router";
import useSession from "@/lib/useSession";

const Comment = (props: any) => {
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [isCommentOpen, setCommentOpen] = React.useState(false);
  const [comment, setComment] = React.useState(props.data.content);
  const [commentModify, setCommentModify] = React.useState(false);
  const router = useRouter();
  const { session } = useSession();

  useEffect(() => {}, [commentModify]);
  const openComment = () => {
    isCommentOpen ? setCommentOpen(false) : setCommentOpen(true);
  };
  const handleUpdateClick = async (event: React.FormEvent<HTMLFormElement>) => {
    //commentModify가 true일 경우만 FormEvent 실행.
    if (commentModify) {
      event.preventDefault();
    }

    const data = new FormData(event.currentTarget);
    const { commentcontent } = Object.fromEntries(data.entries());

    const response = await fetch("http://localhost:3000/api/comment", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commentid: props.data.commentid,
        content: commentcontent,
      }),
    });

    if (response.ok) {
      alert("댓글이 수정되었습니다.");
      setCommentModify(false);
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
          borderBottom: 1,
          marginBottom: "10px",
          fontFamily: "monospace",
          border: 1,
        }}
      >
        <Box
          sx={{
            width: "10%",
            height: "auto",
            border: 1,
            color: "#D9D9D9",
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
            width: "85%",
            border: 1,
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
          <Input
            multiline
            inputProps={{ maxLength: 300 }}
            sx={{
              marginTop: "10px",
              width: "100%",
              whiteSpace: "normal", // 줄 바꿈 방지 스타일
              fontSize: { xl: 20 },
              pointerEvents: commentModify ? "" : "none",
              border: "none",
              outline: "none",
            }}
            placeholder="댓글은 300자까지 입력 가능합니다."
            defaultValue={props.data.content}
            value={commentModify ? null : props.data.content}
            onChange={setComment}
            name="commentcontent"
          ></Input>
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
            }}
          >
            <Box onClick={openComment}>답글쓰기</Box>
          </Box>
        </Box>
        {session.nickname === props.data.nickname && (
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
                    height: { xs: "50%", xl: "100%" },
                  }}
                  onClick={() => setCommentModify(true)}
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
                  onClick={handleDeleteClick}
                >
                  삭제
                </Button>
              </>
            )}

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
          postid={props.data.postid}
          parentid={props.data.commentid}
        />
      ) : null}
      {props.data.child.map((object: [], index: number) => (
        <CommentComment key={index} data={object} openComment={openComment} />
      ))}
    </>
  );
};

export default Comment;
