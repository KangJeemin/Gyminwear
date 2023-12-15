import * as React from "react";
import DoubleContainer from "./doubleContainer";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillWrapper from "./quillWrapper";
import TextField from "@mui/material/TextField";
import Modal from "./modal";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import WestIcon from "@mui/icons-material/West";
import useSession from "@/lib/useSession";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function Write() {
  const [content, setContent] = React.useState<string>("");
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<File | null>(null);
  const { session } = useSession();
  const router = useRouter();

  const handleSubmitWrite = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { title, nickname } = Object.fromEntries(data.entries());
    const sendWrtie = {
      title,
      nickname,
      content,
    };
    const response = await fetch("http://localhost:3000/api/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        nickname: nickname,
        content: content,
      }),
    });
  };
  const handleSubmit = async () => {
    // if (!file) {
    //   console.error("선택된 파일이 없습니다");
    //   return;
    // }
    // try {
    //   console.log(file.type);
    //   const response = await fetch("http://localhost:3000/api/upload", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ filename: file.name, contentType: file.type }),
    //   });
    //   if (response.ok) {
    //     const { url, fields } = await response.json();
    //     const formData = new FormData();
    //     Object.entries(fields).forEach(([key, value]) => {
    //       formData.append(key, value as string);
    //     });
    //     formData.append("file", file);
    //     const uploadResponse = await fetch(url, {
    //       method: "POST",
    //       body: formData,
    //     });
    //     if (uploadResponse.ok) {
    //       alert("Upload successful!");
    //     } else {
    //       console.error("S3 Upload Error:", uploadResponse);
    //       alert("Upload failed.");
    //     }
    //   } else {
    //     alert("Failed to get pre-signed URL.");
    //   }
    // } catch (error) {
    //   console.log("clientError=", error);
    // }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <DoubleContainer>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          color: "black",
          marginTop: "20px",
          fontWeight: "bold",
          borderBottom: 1,
          fontFamily: "monospace",
          marginBottom: "20px",
          fontSize: 20,
        }}
      >
        <WestIcon />
        글쓰기
      </Box>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Container>
          <h3>글 작성을 취소하시겠습니까?</h3>
          <h5>(취소하면 작성 중인 내용은 저장되지 않습니다.)</h5>
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
      <Box component="form" noValidate onSubmit={handleSubmitWrite}>
        <Box
          sx={{
            width: "100%",
            height: "50px",
            color: "black",
            display: "flex",
            marginTop: "20px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          <TextField
            id="title"
            name="title"
            label="제목"
            variant="standard"
            sx={{ width: "70%" }}
          />
          <Box sx={{ width: "10%" }}></Box>
          <TextField
            id="nickname"
            name="nickname"
            label="작성자"
            variant="standard"
            sx={{ width: "20%" }}
            value={session.nickname}
          />
        </Box>
        <input
          id="file"
          type="file"
          onChange={(e) => {
            const files = e.target.files;
            if (files) {
              setFile(files[0]);
            }
          }}
          accept="image/png, image/jpeg"
        />
        <QuillWrapper
          name="content"
          content={content}
          setContent={setContent}
        />
        <Box sx={{ paddingTop: "100px", display: "flex" }}>
          <Box sx={{ width: { xl: "90%" } }}></Box>
          <Button component="label" variant="contained" onClick={openModal}>
            취소
          </Button>

          <Box sx={{ width: { xs: "90%", xl: "5%" } }}></Box>
          <Button type="submit" variant="contained">
            등록
          </Button>
        </Box>
      </Box>
    </DoubleContainer>
  );
}
