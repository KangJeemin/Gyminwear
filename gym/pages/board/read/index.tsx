import * as React from "react";
import Read from "@/components/read";
import CommentContainer from "@/components/commentContainer";
import useSession from "@/lib/useSession";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export default function index(props: any) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="짐인웨어 유저들이 올린 게시물을 보고 소통해보세요!"
        />
      </Head>
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
    // 대댓글(child)에 들어갈 객체 정렬
    result.forEach((parentObj: any) => {
      parentObj.child.sort((a: any, b: any) => {
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
