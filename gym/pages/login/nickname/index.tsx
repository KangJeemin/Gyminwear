import * as React from "react";
import NicknameContainer from "@/container/nicknameContainer";

export default function index() {
  return <NicknameContainer />;
}
// export async function getServerSideProps(context: any) {
//   const { cookie } = context.req.headers;
//   // headers를 사용하여 헤더 정보를 확인 또는 처리합니다.
//   return cookie;
// }
