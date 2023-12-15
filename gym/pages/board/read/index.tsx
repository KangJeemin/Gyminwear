import * as React from "react";
import Read from "@/components/read";
import { GetServerSidePropsContext } from "next";
export default function index() {
  return <Read></Read>;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  const res = await fetch(`http://localhost:3000/api/board?id=${id}`);
  const data = await res.json();

  console.log("data=", data);

  return {
    props: {
      // data: data,
    },
  };
}
