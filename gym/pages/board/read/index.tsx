import * as React from "react";
import Read from "@/components/read";
import CommentContainer from "@/components/commentContainer";
import { GetServerSidePropsContext } from "next";
export default function index(props: any) {
  return (
    <>
      <Read data={props.data}></Read>
      <CommentContainer />
    </>
  );
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  const resBoard = await fetch(`http://localhost:3000/api/board?id=${id}`);
  const boardData = await resBoard.json();

  const resComment = await fetch(`http://localhost:3000/api/comment`);
  const commentData = await resComment.json();

  return {
    props: {
      data: boardData,
    },
  };
}
