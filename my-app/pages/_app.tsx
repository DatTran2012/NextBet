import '../styles/globals.css';
// import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/fontawesome.min.css'
import '../public/assets/css/jquery-ui.css'
import '../public/assets/css/plugin/nice-select.css'
import '../public/assets/css/plugin/magnific-popup.css'
import '../public/assets/css/plugin/slick.css'
import '../public/assets/css/arafat-font.css'
import '../public/assets/css/plugin/animate.css'
import '../public/assets/css/style.css'
import "./components/dashboard/dashboard.css"
import type { AppProps } from 'next/app';
import { Provider } from './Provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
