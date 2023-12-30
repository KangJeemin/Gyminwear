import React from "react";
import Head from "next/head";
import PageNavigate from "@/components/PageNavigate";
import ResponsiveAppBar from "@/components/appbar";
import Board from "@/components/board";
import Miniboard from "@/components/miniboard";
import useSession from "@/lib/useSession";
import Pagedivide from "@/components/pagedivide";
import { GetServerSidePropsContext } from "next";
import { ConstructionOutlined } from "@mui/icons-material";

type boardInfo = {
  brandname: string;
  gymitem: [];
  countresult: number;
};
export default function board(props: any) {
  return (
    <>
      <Board mapcount={16} data={props.data} />
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
