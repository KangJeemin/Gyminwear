import * as React from "react";
import Read from "@/components/read";
import CommentContainer from "@/components/commentContainer";
import useSession from "@/lib/useSession";
import { GetServerSidePropsContext } from "next";
export default function index(props: any) {
  return (
    <>
      <Read data={props.data}></Read>
      <CommentContainer data={props.commentData} boardData={props.data} />
    </>
  );
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  try {
    // Parallel fetch using Promise.all
    const [boardRes, commentRes] = await Promise.all([
      fetch(`http://localhost:3000/api/board?id=${id}`),
      fetch(`http://localhost:3000/api/comment?id=${id}`),
    ]);

    const boardData = await boardRes.json();
    const allCommentData = await commentRes.json();
    const result = [];

    // 객체를 id를 키로 하는 맵으로 변환
    const idMap = new Map();
    allCommentData.forEach((obj) => {
      idMap.set(obj.commentid, { ...obj, child: [] });
    });

    // 부모-자식 관계 설정
    allCommentData.forEach((obj) => {
      if (obj.parentcommentid !== null) {
        idMap.get(obj.parentcommentid).child.push(idMap.get(obj.commentid));
      } else {
        result.push(idMap.get(obj.commentid));
      }
    });

    return {
      props: {
        data: boardData,
        commentData: result,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    // Handle error and return appropriate props or redirect
    return {
      props: {
        data: null,
      },
    };
  }
}
