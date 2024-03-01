import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@/components/modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import type { TextFieldColor } from "@/interface/board";

type props = {
  nickname: string;

  joinCheck: boolean;
  nicknameFiledColor: TextFieldColor;
  initializeCheck: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  typingNickName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkNickName: () => void;
  handleSubmit: () => void;
};
export default function NickName({
  nickname,
  joinCheck,
  nicknameFiledColor,
  initializeCheck,
  typingNickName,
  checkNickName,
  handleSubmit,
}: props) {
  return (
    <Box
      sx={{
        width: { xs: "300x", md: "600px" },
        height: { xs: "400px", md: "600px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
        }}
      >
        <h3>사용하실 닉네임을 입력 해주세요.</h3>
        <h5
          style={{
            color: "gray",
          }}
        >
          (영어,숫자,한글을조합하여 3~12자 이내로 입력해주세요.)
        </h5>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <TextField
            id="outlined-multiline-flexible"
            label="닉네임(3~12자)"
            //State의 변수를 그대로 대입하려 했는데 타입 오류 발생
            color={nicknameFiledColor === "warning" ? "warning" : undefined}
            multiline
            fullWidth
            onKeyDown={initializeCheck}
            maxRows={1}
            name="nickname"
            value={nickname}
            onChange={typingNickName}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            onClick={checkNickName}
            disabled={nickname ? false : true}
            sx={{
              width: {
                sx: 200,
                md: 140,
              },
              height: 58,
              fontSize: { xs: 8, md: 15 },
            }}
          >
            중복확인
          </Button>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={joinCheck ? false : true}
      >
        완료
      </Button>
    </Box>
  );
}
