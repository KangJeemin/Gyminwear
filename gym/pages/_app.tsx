import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../public/context/authcontext'
import React from 'react'
import Header from './src/component/header/header/header'
import HeaderMargin from './src/component/header/headerMargin'
import Footer from './src/component/footer/footer'
import PcHeader from './src/component/header/pc/pcHeader'
import PcHeaderMargin from './src/component/header/pc/pcHeaderMargin'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <BrowserView>
        <PcHeader/>
        <PcHeaderMargin/>
      </BrowserView>
      <MobileView>
        <Header/>
        <HeaderMargin/>
      </MobileView>
      <Component {...pageProps} />
      {/* <Footer/> */}
    </AuthProvider>
  )

}
