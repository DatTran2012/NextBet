import '../styles/globals.css';
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
