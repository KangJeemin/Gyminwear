import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import useSession from "@/lib/useSession";
import { useRouter } from "next/router";
import type { commentWrite } from "@/interface/board";

export default function CommentWrtie(props: commentWrite) {
  const { session } = useSession();
  const router = useRouter();

  const handleSubmitWrite = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const { commentnickname, commentcontent } = Object.fromEntries(
      data.entries()
    );

    const response = await fetch(`${process.env.NEXT_PUBLIC_IP}/api/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postid: props.postid,
        parentid: props.commentid,
        // parentid: props.parentCommentId,
        nickname: commentnickname,
        content: commentcontent,
      }),
    });
    if (response.ok) {
      alert("댓글이 작성되었습니다.");
      router.reload();
    }
  };
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmitWrite}
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          width: "5%",
          height: "100%",
        }}
      >
        ㄴ
      </Box>
      <Box
        sx={{
          width: "95%",
          height: "auto",
          border: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          id="CommentNickname"
          name="commentnickname"
          disabled={!session.isLoggedIn ? true : false}
          label="닉네임"
          variant="standard"
          sx={{ width: "300px" }}
          value={session.nickname}
        />
        <Box
          sx={{
            width: "100%",
            height: "auto",
          }}
        >
          <Input
            multiline
            inputProps={{ maxLength: 300 }}
            sx={{
              width: "100%",
              height: "auto",
              backgroundColor: "white",
              color: "black",
              outline: "none",
            }}
            placeholder={
              session.isLoggedIn
                ? "댓글은 300자까지 입력 가능합니다."
                : "로그인후 댓글 작성이 가능합니다."
            }
            name="commentcontent"
            disabled={!session.isLoggedIn ? true : false}
          ></Input>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "40px",
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
    </Box>
  );
}
