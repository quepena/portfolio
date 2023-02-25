import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Link from 'next/link';
import NavBar from '../components/NavBar';
config.autoAddCss = false;
import navButtons from '../components/NavButtons'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='page'>
      <input className="checkbox" type="checkbox" name="" id="checkbox" />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <div className="background">&nbsp;</div>
      {/* <div className='menu'> */}
        <nav className='nav'>
          <Link href="/">
            <img className='logo' src="https://see.fontimg.com/api/renderfont4/GO3ED/eyJyIjoiZnMiLCJoIjo1MiwidyI6MTAwMCwiZnMiOjUyLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/Qi5T/creattion-demo.png" alt="" />
          </Link>
          <NavBar navButtons={navButtons} />
        </nav>
      {/* </div> */}
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
