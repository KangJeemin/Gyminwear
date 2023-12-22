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
import Image from "next/image";
import { write } from "fs";
import { resolve } from "path";
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
export default function Write(props: any) {
  const [writePage, setWritePage] = React.useState<boolean>(true);
  const [content, setContent] = React.useState<string>("");
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<File | null>(null);
  const { session } = useSession();
  const router = useRouter();
  React.useEffect(() => {
    props.data === null ? setContent("") : setContent(props.data[0].content);
  }, []);

  //에디터에서 img 태그의 url 추출
  const extractImageUrls = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const imageElements = doc.querySelectorAll("img");
    const imageUrls = Array.from(imageElements).map((img) => img.src);
    return imageUrls;
  };

  const handleSubmitWrite = async (event: React.FormEvent<HTMLFormElement>) => {
    let method: string;
    if (props.data === null) {
      method = "POST";
    } else {
      method = "PUT";
    }
    event.preventDefault();

    //에디터에서 img 태그의 url 추출
    const imageUrls = extractImageUrls(content);

    const data = new FormData(event.currentTarget);
    const id = props.data[0].postid;
    const { title, nickname } = Object.fromEntries(data.entries());

    const response = await fetch("http://localhost:3000/api/board", {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postid: id,
        title: title,
        nickname: nickname,
        content: content,
      }),
    });
    console.log(response);
  };
  const handleSubmit = async () => {
    if (!file) {
      console.error("선택된 파일이 없습니다");
      return;
    }
    try {
      console.log("file=", file);
      console.log(file.type);
      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
        }),
      });
      if (response.ok) {
        const { url, fields } = await response.json();
        const formData = new FormData();
        Object.entries(fields).forEach(([key, value]) => {
          formData.append(key, value as string);
        });
        formData.append("Content-Type", "image/png");
        formData.append("file", file);

        //---
        const imageUrls = extractImageUrls(content);

        // Upload each image to AWS S3
        for (let i = 0; i < imageUrls.length; i++) {
          const imageUrl = imageUrls[i];
          const blobData = await fetch(imageUrl).then((res) => res.blob());
          Object.entries(fields).forEach(([key, value]) => {
            formData.append(key, value as string);
          });
          formData.append("Content-Type", "image/png");
          formData.append("file", blobData);
        }
        //---
        const uploadResponse = await fetch(url, {
          method: "POST",
          body: formData,
        });

        if (uploadResponse.ok) {
          alert("Upload successful!");
        } else {
          console.error("S3 Upload Error:", uploadResponse);
          alert("Upload failed.");
        }
      } else {
        alert("Failed to get pre-signed URL.");
      }
    } catch (error) {
      console.error("clientError=", error);
    }
  };

  const handleFileRead = async () => {
    const response = await fetch("http://localhost:3000/api/upload");
    if (response.ok) {
      console.log(response);
    }
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
        <WestIcon onClick={openModal} />
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
                window.history.back();
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
      <Box component="form" noValidate onSubmit={handleSubmit}>
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
            defaultValue={props.data === null ? "" : props.data[0].title}
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
        {/* <Image
          src="https://gyminwearimage.s3.ap-northeast-2.amazonaws.com/8ac7e616-78b4-4690-9dd8-1ee7a4448c13"
          alt="이미지 표시 못함"
          width={500}
          height={500}
        />{" "} */}

        <input
          id="file"
          type="file"
          onChange={(e) => {
            const files = e.target.files;
            if (files) {
              setFile(files[0]);
              console.log("files=", files);
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
          {props.data === null ? (
            <Button variant="contained" onClick={handleSubmit}>
              등록
            </Button>
          ) : (
            <Button type="submit" variant="contained">
              수정
            </Button>
          )}
        </Box>
      </Box>
    </DoubleContainer>
  );
}
