import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../public/context/authcontext'
import React from 'react'
import Header from './src/component/header/header'
import HeaderMargin from './src/component/header/headerMargin'
import Footer from './src/component/footer/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      {/* <Header/> */}
      {/* <HeaderMargin/> */}
      <Component {...pageProps} />
      {/* <Footer/> */}
    </AuthProvider>
  )

}
