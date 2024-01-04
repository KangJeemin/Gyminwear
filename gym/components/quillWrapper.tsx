import * as React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

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
// QuillWrapper를 정의하기 전에 ImageCompress를 등록해보세요.

export default function Quillwrapper(props: any) {
  const QuillWrapper = React.useMemo(
    () =>
      dynamic(
        () =>
          import("react-quill").then(({ Quill }) => {
            const ImageCompress = require("quill-image-compress");
            Quill.register("modules/imageCompress", ImageCompress);

            // Continue with the rest of your dynamic import
            return import("react-quill");
          }),
        {
          ssr: false,
          loading: () => <p>Loading ...</p>,
        }
      ),
    []
  );
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
    modules: {
      imageCompress: {
        quality: 0.7,
        maxWidth: 1000,
        maxHeight: 1000,
        imageType: "image/jpeg",
        debug: true,
      },
    },
    clipboard: {
      matchVisual: false,
    },
  });

  React.useEffect(() => {
    // 화면 너비를 기반으로 모바일 장치 여부 확인
    const isMobile = true;

    if (isMobile) {
      // 모바일 버전에 대한 툴바 설정
      setModules((prevModules) => ({
        ...prevModules,
        toolbar: [
          ["image", "link", "video"],
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline"],
          ["list", "bullet"],
          ["clean"],
        ],
        modules: {
          ...prevModules.modules,
          imageCompress: {
            quality: 0.7,
            maxWidth: 1000,
            maxHeight: 1000,
            imageType: "image/jpeg",
            debug: true,
          },
        },
        clipboard: {
          matchVisual: false,
        },
      }));
    }
  }, [QuillWrapper]);

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
        height: "auto",
      }}
    />
  );
}

// import React, { useEffect } from "react";
// import Quill from "quill";
// import "quill/dist/quill.snow.css";
// import ImageCompress from "quill-image-compress";

// Quill.register("modules/imageCompress", ImageCompress);
// let ReactQuill =
//   typeof window === "object" ? require("react-quill") : () => false;
// const MyQuillEditor = ({ initialContent }) => {
//   useEffect(() => {
//     // Quill 에디터 초기화
//     let quill = new Quill("#editor", {
//       theme: "snow",
//       modules: {
//         toolbar: [
//           ["image", "link", "video"],
//           [{ header: "1" }, { header: "2" }],
//           ["bold", "italic", "underline"],
//           ["list", "bullet"],
//           ["clean"],
//         ],
//         imageCompress: {
//           quality: 0.7,
//           maxWidth: 1000,
//           maxHeight: 1000,
//           imageType: "image/jpeg",
//           debug: true,
//           suppressErrorLogging: false,
//           insertIntoEditor: undefined,
//         },
//         clipboard: {
//           matchVisual: false,
//         },
//       },
//     });

//     // 초기 내용 설정
//     quill.clipboard.dangerouslyPasteHTML(initialContent);

//     // 컴포넌트가 언마운트 될 때 Quill을 정리
//     return () => {};
//   }, [initialContent]);

//   return ReactQuill ? (
//     <div>
//       {/* Quill 에디터를 위한 컨테이너 */}
//       <div id="editor" style={{ height: "400px" }} />
//       {/* 다른 컴포넌트 요소들을 추가할 수 있습니다. */}
//     </div>
//   ) : null;
// };

// export default MyQuillEditor;
