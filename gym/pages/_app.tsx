import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import ResponsiveAppBar from "@/components/appbar";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import defaultSeoProps from "@/next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
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

  return (
    <>
      <Head>
        <DefaultSeo {...defaultSeoProps} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
        <link rel="icon" href="http://gyminwear.com/favicon.ico"></link>
      </Head>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </>
  );
}
