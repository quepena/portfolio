import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
