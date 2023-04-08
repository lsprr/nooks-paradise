import '../styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '@components/layout/navigation/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sea Bass</title>
        <meta property="og:title" content="Sea Bass" />
        <meta name="description" content="🐟 You caught a sea bass! No, wait—it's at least a C+!" key="desc" />
        <meta property="og:description"
          content="🐟 You caught a sea bass! No, wait—it's at least a C+!" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Navbar menuItems={[]} />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
