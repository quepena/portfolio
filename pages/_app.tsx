import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='page'>
      <div className='menu'>
        <Header />
      </div>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
