import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../public/context/authcontext'
import HambergerModal from './src/component/header/hambergerModal'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )

}
