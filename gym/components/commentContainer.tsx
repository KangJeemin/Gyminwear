import * as React from "react";
import DoubleContainer from "./doubleContainer";
import Comment from "@/components/comment";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useSession from "@/lib/useSession";
import { useRouter } from "next/router";
import ClientAPIReq from "@/lib/ClientAPIReq";
import type { commentInfo, addChildComment, readInfo } from "@/interface/board";

interface commentProps {
  data: Array<readInfo>;
  commentData: Array<addChildComment>;
  setCommentRerender: Function;
}

function CommentContainer({
  data,
  commentData,
  setCommentRerender,
}: commentProps) {
  const { postid, title, nickname, content, viewcount, date, commentcount } =
    data[0];
  const { session } = useSession();
  const router = useRouter();
  const handleSubmitWrite = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { commentcontent } = Object.fromEntries(data.entries());

    const APIreq = {
      url: `${process.env.NEXT_PUBLIC_IP}/api/comment`,
      method: "POST",
      BodyJSON: {
        postid: postid,
        content: commentcontent as string,
        nickname: session.nickname,
      },
    };
    const response = await ClientAPIReq(APIreq);
    if (response.ok) {
      alert("댓글이 작성되었습니다.");
      setCommentRerender((pre) => pre + 1);
    }
  };
  return (
    <DoubleContainer>
      {commentData.map((object: addChildComment, index: number) => (
        <>
          <Comment
            key={index}
            data={object}
            postid={postid}
            parentComent={true}
            setCommentRerender={setCommentRerender}
          />
          {object.child.map((innerObject: commentInfo, innerIndex: number) => (
            <Comment
              key={innerIndex}
              data={innerObject}
              postid={postid}
              parentComent={false}
              parentData={object}
              setCommentRerender={setCommentRerender}
            />
          ))}
        </>
      ))}

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmitWrite}
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
          disabled={!session.isLoggedIn ? true : false}
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
            placeholder={
              session.isLoggedIn
                ? "댓글은 300자까지 입력 가능합니다."
                : "로그인후 댓글 작성이 가능합니다."
            }
            disabled={!session.isLoggedIn ? true : false}
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
            disabled={!session.isLoggedIn ? true : false}
          >
            등록
          </Button>
        </Box>
      </Box>
    </DoubleContainer>
  );
}
export default React.memo(CommentContainer);
