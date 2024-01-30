import * as React from "react";
import Read from "@/components/read";
import CommentContainer from "@/components/commentContainer";
import useSession from "@/lib/useSession";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import type { readInfo, commentInfo, addChildComment } from "@/interface/board";

interface readPageProps {
  data: Array<readInfo>;
  commentData: Array<addChildComment>;
}

function index({ data, commentData }: readPageProps) {
  React.useState(() => {});
  const [commentRerender, setCommentRerender] = React.useState(0);
  return (
    <>
      <Head>
        <title>헬스 짐웨어 | 운동복 모음 사이트</title>
        <meta
          name="description"
          content="짐인웨어 유저들이 올린 게시물을 보고 소통해보세요!"
        />
      </Head>
      <Read data={data}></Read>
      <CommentContainer
        data={data}
        commentData={commentData}
        setCommentRerender={setCommentRerender}
      />
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
    const result: Array<addChildComment> = [];

    // 객체를 id를 키로 하는 맵으로 변환
    const idMap = new Map();
    allCommentData.forEach((obj: commentInfo) => {
      idMap.set(obj.commentid, { ...obj, child: [] });
    });

    // 부모-자식 관계 설정
    allCommentData.forEach((obj: commentInfo) => {
      if (obj.parentcommentid !== null) {
        idMap.get(obj.parentcommentid).child.push(idMap.get(obj.commentid));
      } else {
        result.push(idMap.get(obj.commentid));
      }
    });
    // 대댓글(child)에 들어갈 객체 정렬
    result.forEach((parentObj: addChildComment) => {
      parentObj.child.sort((a: commentInfo, b: commentInfo) => {
        // commentid를 기준으로 오름차순 정렬
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
export default React.memo(index);
