import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import ResponsiveAppBar from "@/components/appbar";
import { DefaultSeo } from "next-seo";
import defaultSeoProps from "@/next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </>
  );
}
