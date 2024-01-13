import React from "react";
import Head from "next/head";
import PageNavigate from "@/components/PageNavigate";
import ResponsiveAppBar from "@/components/appbar";
import Miniboard from "@/components/miniboard";
import useSession from "@/lib/useSession";
import Pagedivide from "@/components/pagedivide";
import Board from "@/components/board";
import getMiniBoard from "@/pages/api/miniboard";

export const getStaticProps = async () => {
  const MiniBoard = await getMiniBoard();
  const data = JSON.parse(MiniBoard);
  return {
    props: {
      data: data,
    },
  };
};

export default function Main(props: any) {
  function addProductJsonLd() {
    return {
      __html: `{
        "@context" : "https://schema.org",
        "@type" : "WebSite",
        "name" : "Gyminwear",
        "alternateName" : "짐인웨어",
        "url" : "https://gyminwear.com/",
      }
  `,
    };
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
        <link rel="icon" href="http://gyminwear.com/favicon.ico"></link>
      </Head>
      <PageNavigate />
      <Pagedivide />
      <Board mapcount={4} data={props.data} />
    </>
  );
}
