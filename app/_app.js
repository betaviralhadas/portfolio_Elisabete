/*import '../app/globals.scss'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
export default App; */


// pages/_app.js
import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>ELISABETE</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
