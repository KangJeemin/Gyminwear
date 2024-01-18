import React from "react";
import Head from "next/head";
import Board from "@/components/board";
import { GetServerSidePropsContext } from "next";
import { boardProps } from "@/interface/board";
export default function board(props: boardProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="짐인웨어 유저들이 올린 게시글들을 확인 해보세요!"
        />
      </Head>
      <Board mapcount={20} data={props.data} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { page } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_IP}/api/board?page=${page}`
  );
  const data = await res.json();
  console.log("data=", data);

  return {
    props: {
      data: data,
    },
  };
}
