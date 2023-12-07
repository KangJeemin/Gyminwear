import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import ResponsiveAppBar from "@/components/appbar";
import { DefaultSeo } from "next-seo";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="짐웨어 | 국내 짐웨어 모음 사이트"
        description="짐웨어 사이트들을 모아 놓았습니다. 짐인웨어에서 짐웨어 브랜들을 확인하고, 홈페이지로 이동하여 다양한 짐웨어를 확인해보세요!"
        canonical="https://gyminwear.com/"
        openGraph={{
          url: "https://gyminwear.com",
          title: "짐인웨어",
          description: "짐웨어 사이트들을 모아 놓았습니다.",
          images: [
            {
              url: "https://gyminwear.com/public/gyminwearLogo.jpg",
              width: 400,
              height: 300,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: "짐인웨어",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </>
  );
}
