import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@/components/modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

type TextFieldColor =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "info"
  | undefined;

export default function SetNickName() {
  const [isModalOpen, setModalOpen] = React.useState(true);
  const [nickname, setNickName] = React.useState("");
  const [nicknameFiledColor, setNicknameFiledColor] =
    React.useState<TextFieldColor>(undefined);
  const closeModal = React.useCallback(() => {
    setModalOpen(false);
  }, []);
  const initializeTextFiledColor = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Backspace") {
        setNicknameFiledColor(undefined);
      }
    },
    []
  );
  const typingNickName = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNickName(e.target.value);
    },
    []
  );
  async function checkNickName() {
    const regex = /^[a-zA-Z0-9가-힣]+$/;
    if (
      !(nickname.length >= 3 && nickname.length <= 12 && regex.test(nickname))
    ) {
      alert("닉네임은 영어 또는 한글로 3~12자 이내로 입력해주세요.😭");
      setNicknameFiledColor("warning");
      return false;
    }
  }

  async function handleSubmit() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_IP}/api/join?nickname=${nickname}`
    );
    if (response.ok) {
      const responseData = await response.json();
      if (responseData) {
        alert("중복된 닉네임이 존재합니다. 다른 닉네임으로 재설정해주세요.");
        setNicknameFiledColor("warning");
      } else {
        alert("이 닉네임은 사용이 가능 합니다.");
        setNicknameFiledColor("success");
      }
    } else {
      alert("닉네임 중복 검사 중 오류가 발생했습니다. 재시도 해주세요.");
      return;
    }
  }

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
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
          component="form"
          noValidate
          onSubmit={handleSubmit}
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
            (닉네임은 영어 또는 한글로 3~12자 이내로 입력해주세요.)
          </h5>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <TextField
              id="outlined-multiline-flexible"
              label="닉네임(3~12자)"
              //State의 변수를 그대로 대입하려 했는데 타입 오류 발생
              color={
                nicknameFiledColor === "warning"
                  ? "warning"
                  : nicknameFiledColor === "success"
                  ? "success"
                  : undefined
              }
              multiline
              fullWidth
              onKeyDown={initializeTextFiledColor}
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
        <Button variant="contained" disabled={true}>
          완료
        </Button>
      </Box>
    </Modal>
  );
}
