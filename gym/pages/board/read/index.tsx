import * as React from "react";
import Read from "@/components/read";
import { GetServerSidePropsContext } from "next";
export default function index(props: any) {
  return <Read data={props.data}></Read>;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  const res = await fetch(`http://localhost:3000/api/board?id=${id}`);
  const data = await res.json();

  console.log("data=1", data);

  return {
    props: {
      data: data,
    },
  };
}
