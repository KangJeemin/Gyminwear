import React from "react";
import Head from "next/head";
import PageNavigate from "@/components/PageNavigate";
import ResponsiveAppBar from "@/components/appbar";
import Miniboard from "@/components/miniboard";
import useSession from "@/lib/useSession";
import Pagedivide from "@/components/pagedivide";
import Board from "@/components/board";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/board?page=1", {
    method: "GET",
  });
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

export default function Main(props: any) {
  const { session, isLoading } = useSession();
  React.useEffect(() => {
    console.log(session);
    if (session.isLoggedIn) {
      console.log("로그인 되어있음");
    } else {
      console.log("로그아웃 되어있음");
    }
  }, [isLoading, session.isLoggedIn]);

  return (
    <>
      <Head>
        <meta
          name="naver-site-verification"
          content="ed45f0e362ab1bf63a17000be1426ad91060cd44"
        />
      </Head>
      <PageNavigate />
      <Pagedivide />
      <Board mapcount={4} data={props.data} />
    </>
  );
}
