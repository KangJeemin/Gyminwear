import * as React from "react";
import dynamic from "next/dynamic";
import ImageResize from "quill-image-resize-module-ts";
import Quill from "quill";

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

const QuillWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
Quill.register("modules/imageResize", ImageResize);

export default function Quillwrapper(props: any) {
  const [modules, setModules] = React.useState({
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
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
    clipboard: {
      matchVisual: false,
    },
  });

  React.useEffect(() => {
    // 화면 너비를 기반으로 모바일 장치 여부 확인
    const isMobile = window.innerWidth <= 768;
    console.log("quill=", modules);

    if (isMobile) {
      // 모바일 버전에 대한 툴바 설정
      setModules({
        toolbar: [
          ["image", "link", "video"],
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline"],
          ["list", "bullet"],
          ["clean"],
        ],
        imageResize: { modules: ["Resize"] },
        clipboard: {
          matchVisual: false,
        },
      });
    }
  }, []);

  return (
    <QuillWrapper
      value={props.content}
      onChange={props.setContent}
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="내용을 입력하세요."
      style={{
        width: "100%",
        height: "300px",
      }}
    />
  );
}
