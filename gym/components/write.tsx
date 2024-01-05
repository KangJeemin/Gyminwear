import * as React from "react";
import DoubleContainer from "./doubleContainer";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "react-quill/dist/quill.snow.css";
import TextField from "@mui/material/TextField";
import Modal from "./modal";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import WestIcon from "@mui/icons-material/West";
import useSession from "@/lib/useSession";
// import Quillwrapper from "./quillWrapper";
import Skeleton from "@mui/material/Skeleton";
import dynamic from "next/dynamic";

import Image from "next/image";
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
  const ReactQuill = dynamic(() => import("./quillWrapper"), {
    ssr: false,
    // quill이 로딩중일때 렌더링할 Skeleton
    loading: () => (
      <>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" height={200} />
      </>
    ),
  });
  const memoizationValue = React.useMemo(() => {
    return content;
  }, [content]);
  React.useEffect(() => {
    // props.data가 null 일 경우 글쓰기 페이지로 판단, 값이 있을 경우 수정 페이지로 판단.
    props.data === null ? setContent("") : setContent(props.data[0].content);
  }, []);

  //에디터에서 img 태그의 url 추출
  const extractImageUrls = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const imageElements = doc.querySelectorAll("img");
    const imageUrls = Array.from(imageElements).map((img) => img.src);
    return imageUrls;
  };
  // 에디터의 img src에 AWS S3 URL 넣기
  const changeMultipleImageSrc = (
    html: string,
    newSrcArray: Array<string>,
    url: string
  ) => {
    // HTML을 DOM으로 파싱
    const doc = new DOMParser().parseFromString(html, "text/html");

    // img 태그 선택
    const imageElements = doc.querySelectorAll("img");

    // 각 img 태그의 src 속성 변경
    imageElements.forEach((img, index) => {
      if (newSrcArray[index]) {
        img.src = url + newSrcArray[index];
        // 이미지의 크기를 조절
        img.style.width = "100%";
        img.style.height = "512px";
      }
    });

    // 변경된 HTML 중 body만 반환
    return doc.body.innerHTML;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    let method: string;
    if (props.data === null) {
      method = "POST";
    } else {
      method = "PUT";
    }
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { title, nickname } = Object.fromEntries(data.entries());
    if (!title) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!content) {
      alert("내용을 입력해주세요.");
      return;
    }
    //AWS S3 객체의 이미지 Key값들을 저장.
    const newSrcarray: Array<string> = [];
    let AWSurl: string = "";
    const imageUrls = extractImageUrls(content);

    //이미지의 개수만큼 반복
    for (let i = 0; i < imageUrls.length; i++) {
      const imageUrl = imageUrls[i];
      //base64 형태를 blob으로 변환
      const blobData = await fetch(imageUrl).then((res) => res.blob());
      try {
        // AWS S3 bucket의 URL 주소 응답받기
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_IP}/api/upload`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              filename: blobData.name,
              contentType: blobData.type,
            }),
          }
        );

        if (response.ok) {
          const { url, fields } = await response.json();
          AWSurl = url;
          const formData = new FormData();
          Object.entries(fields).forEach(([key, value]) => {
            formData.append(key, value as string);
          });
          formData.append("Content-Type", "image/png");
          formData.append("file", blobData);
          // 랜덤한 객체의 key값을 배열로 저장
          newSrcarray.push(fields.key);

          //AWS S3 Bucket에 이미지 업로드
          const uploadResponse = await fetch(url, {
            method: "POST",
            body: formData,
          });

          if (!uploadResponse.ok) {
            alert("사진 업로드에 실패했습니다");
            return false;
          }
        } else {
          alert("Failed to get pre-signed URL.");
        }
      } catch (error) {
        console.error("clientError=", error);
      }
    }
    // 이미지를 버킷에 저장 후 데이터베이스에 작성 요청.
    const response = await fetch(`${process.env.NEXT_PUBLIC_IP}/api/board`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // 게시물 작성일떄는 postid가 아직 없음.
        postid: method === "PUT" ? props.data[0].postid : null,
        title: title,
        nickname: nickname,
        content: changeMultipleImageSrc(content, newSrcarray, AWSurl),
      }),
    });
    if (response.ok) {
      alert("게시물이 작성되었습니다.");
      router.push(`${process.env.NEXT_PUBLIC_IP}/board?page=1`);
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
        {/* <input
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
        /> */}
        <Box sx={{ width: { xs: "100%", xl: "100%" } }}>
          <ReactQuill
            name="content"
            content={memoizationValue}
            setContent={setContent}
          />
        </Box>

        <Box sx={{ paddingTop: "100px", display: "flex" }}>
          <Box sx={{ width: { xl: "90%" } }}></Box>
          <Button component="label" variant="contained" onClick={openModal}>
            취소
          </Button>
          <Box sx={{ width: { xs: "90%", xl: "5%" } }}></Box>
          {props.data === null ? (
            <Button type="submit" variant="contained">
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
