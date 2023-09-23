import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../public/context/authcontext'
import React from 'react'
import Header from './src/component/header/header/header'
import HeaderMargin from './src/component/header/headerMargin'
import Footer from './src/component/footer/footer'
import PcHeader from './src/component/header/pc/pcHeader'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <PcHeader/>
      {/* <Header/> */}
      {/* <HeaderMargin/> */}
      <Component {...pageProps} />
      {/* <Footer/> */}
    </AuthProvider>
  )

}
