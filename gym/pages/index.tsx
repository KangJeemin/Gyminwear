import React from "react";
import Head from "next/head";
import PageNavigate from "@/components/BrandNavigate";
import Pagedivide from "@/components/pagedivide";
import type { boardProps } from "@/interface/board";
import { GetServerSidePropsContext } from "next";
import BrandRank from "@/components/brandRank";
import Container from "@mui/material/Container";
import BrandRankContainer from "@/container/brandRankContainer";
import BoardContainer from "@/container/boardCotainer";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_IP}/api/miniboard`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

export default function Main(props: boardProps) {
  return (
    <>
      <Head>
        <title>헬스 짐웨어 | 운동복 모음 사이트</title>
        <meta
          name="description"
          content="짐인웨어에서 국내 짐웨어 브랜드들을 확인하고, 해당 짐웨어 판매 페이지로 이동하여 판매 상품들을 확안해 보세요. 국내의 많은 짐웨어 브랜드들을 제가 대신 기억해 드릴게요."
        />
      </Head>
      <Container>
        <BrandRankContainer />
        <PageNavigate />
        <Pagedivide />
        <BoardContainer mapcount={4} data={props.data} />
      </Container>
    </>
  );
}
