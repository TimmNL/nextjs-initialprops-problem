import '../styles/globals.css'
import App, { AppContext, AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  console.log('executing getInitialProps in _app');
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
}

export default MyApp
