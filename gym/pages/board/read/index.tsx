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

  const res = await fetch(`http://localhost:3000/api/board?id=${id}`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
