import * as React from "react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

import Write from "@/components/write";
export default function index(props: any) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="짐인웨어에 글을 작성하여 나만의 짐웨어를 알려주세요!"
        />
      </Head>
      <Write data={props.data}></Write>;
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  try {
    //수정 API 요청
    if (id !== undefined) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_IP}/api/board?id=${id}`
      );
      const data = await response.json();
      return {
        props: {
          data: data,
        },
      };
      // 작성 API 요청
    } else {
      return {
        props: {
          data: null,
        },
      };
    }
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
