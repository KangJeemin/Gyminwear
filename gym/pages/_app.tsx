import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../pages/src/component/context/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )

}
