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
      fetch(`${process.env.NEXT_PUBLIC_IP}/api/board?id=${id}`),
      fetch(`${process.env.NEXT_PUBLIC_IP}/api/comment?id=${id}`),
    ]);

    const boardData = await boardRes.json();
    const allCommentData = await commentRes.json();
    const result: any = [];

    // 객체를 id를 키로 하는 맵으로 변환
    const idMap = new Map();
    allCommentData.forEach((obj: any) => {
      idMap.set(obj.commentid, { ...obj, child: [] });
    });

    // 부모-자식 관계 설정
    allCommentData.forEach((obj: any) => {
      if (obj.parentcommentid !== null) {
        idMap.get(obj.parentcommentid).child.push(idMap.get(obj.commentid));
      } else {
        result.push(idMap.get(obj.commentid));
      }
    });
    result.forEach((parentObj: any) => {
      parentObj.child.sort((a: any, b: any) => {
        // 여기에서 a와 b를 비교하여 정렬 조건을 지정해주세요.
        // 예를 들어, commentid를 기준으로 오름차순 정렬하는 경우:
        return a.commentid - b.commentid;
      });
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
