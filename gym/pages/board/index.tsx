import React from "react";
import Head from "next/head";
import Board from "@/components/board";
import { GetServerSidePropsContext } from "next";

type boardInfo = {
  brandname: string;
  gymitem: [];
  countresult: number;
};
export default function board(props: any) {
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

  return {
    props: {
      data: data,
    },
  };
}
