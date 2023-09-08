import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../public/context/authcontext'
import React from 'react'
import Header from './src/component/header/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <AuthProvider>
      <Header/>
      <Component {...pageProps} />
    </AuthProvider>
  )

}
