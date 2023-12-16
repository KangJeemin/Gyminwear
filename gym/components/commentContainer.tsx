import * as React from "react";
import DoubleContainer from "./doubleContainer";
import Comment from "@/components/comment";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useSession from "@/lib/useSession";

export default function CommentContainer(props: any) {
  const { session } = useSession();
  return (
    <DoubleContainer>
      {props.data.map((object: [], index: number) => (
        <Comment key={index} data={object[index]} />
      ))}

      <Box
        component="form"
        noValidate
        // onSubmit={handleSubmitWrite}
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
            placeholder="댓글은 300자까지 입력 가능합니다."
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
          >
            등록
          </Button>
        </Box>
      </Box>
    </DoubleContainer>
  );
}
