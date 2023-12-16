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

  try {
    // Parallel fetch using Promise.all
    const [boardRes, commentRes] = await Promise.all([
      fetch(`http://localhost:3000/api/board?id=${id}`),
      fetch(`http://localhost:3000/api/comment?id=${id}`),
    ]);

    const boardData = await boardRes.json();
    const commentData = await commentRes.json();
    console.log("commentData=", commentData);

    return {
      props: {
        data: boardData,
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
