import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Quill } from "react-quill";
import dynamic from "next/dynamic";

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
const ReactQuill = dynamic(() => import("react-quill"), {
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

export default function Quillwrapper(props: any) {
  const modules = React.useMemo(
    () => ({
      toolbar: [
        ["image", "link", "video"],
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["clean"],
      ],
      // ImageCompress: {
      //   quality: 0.7,
      //   maxWidth: 1000,
      //   maxHeight: 1000,
      //   imageType: "image/jpeg",
      // },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  ); // Note the correct placement of parentheses

  return (
    <ReactQuill
      value={props.content}
      onChange={props.setContent}
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="내용을 입력하세요."
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
}
