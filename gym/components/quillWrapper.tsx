import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import ReactQuill, { Quill } from "react-quill";
import dynamic from "next/dynamic";
import ImageCompress from "quill-image-compress";
Quill.register("modules/ImageCompress", ImageCompress);

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
      ImageCompress: {
        quality: 0.7,
        maxWidth: 1000,
        maxHeight: 1000,
        imageType: "image/jpeg",
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  ); // Note the correct placement of parentheses

  React.useEffect(() => {
    console.log("window=", window);
  });
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
