import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../ver1-files/context/authcontext'
import React from 'react'
import Header from '../ver1-files/src/component/header/moblie/header/header'
import HeaderMargin from '../ver1-files/src/component/header/moblie/headerMargin'
import Footer from '../ver1-files/src/component/footer/moblie/footer'
import PcHeader from '../ver1-files/src/component/header/pc/pcHeader/pcHeader'
import PcHeaderMargin from '../ver1-files/src/component/header/pc/pcHeaderMargin'
import PcFooter from '@/ver1-files/src/component/footer/pc/pcFooter'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { DefaultSeo } from 'next-seo';
import { NextSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
       title="짐인웨어"
       description="유행하는 짐웨어, 오버핏 짐웨어를 만나보세요!"
       canonical="https://www.gyminwear.com/"
       openGraph={{
         url: 'https://www.gyminwear.com',
         title: '짐인웨어',
         description: '최신 유행하는 짐웨어를 만나보세요!',
         images: [
           {
             url: 'https://www.example.ie/og-image-01.jpg',
             width: 800,
             height: 600,
             alt: 'Og Image Alt',
             type: 'image/jpeg',
           },
         ],
         siteName: 'Gyminwear',
       }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      
      />
      <Component {...pageProps} />
      </>
  )

}
