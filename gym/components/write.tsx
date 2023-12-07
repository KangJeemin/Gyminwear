import * as React from "react";
import DoubleContainer from "./doubleContainer";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'; 
import QuillWrapper from "./quillWrapper";


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
export default function write() {

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
          marginBottom: "20px",
          
        }}
      >
        글쓰기
      </Box>
      <QuillWrapper/>
      <Box sx={{paddingTop:"100px",display:"flex"}}>
      <Box sx={{width:{xl:"90%"}}}></Box>
      <Button
        component="label"
        variant="contained"
      >
        취소
      </Button>
      <Box sx={{width:{xs:"90%",xl:"5%"}}}></Box>
      <Button
        component="label"
        variant="contained"
      >
        저장
      </Button>
      </Box>
      
    </DoubleContainer>
  );
}
