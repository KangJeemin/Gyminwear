import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import ResponsiveAppBar from "@/components/appbar";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import defaultSeoProps from "@/next-seo.config";
import {
  RecoilRoot,
} from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <DefaultSeo {...defaultSeoProps} />
        <link rel="icon" href="http://gyminwear.com/favicon.ico"></link>
      </Head>
      <ResponsiveAppBar />
      <RecoilRoot>
      <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
