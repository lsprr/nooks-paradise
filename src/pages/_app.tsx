import '../styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '@components/layout/navigation/Navbar';

/**
 * TODO: Need to move this array of menu items in a separate file.
*/
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Museum', href: '/museum' },
  { label: 'Category', href: '/category' },
  { label: 'Songs', href: '/songs' },
  { label: 'Characters', href: '/characters' },
];


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wilbur</title>
        <meta property="og:title" content="Sea Bass" />
        <meta name="description" content="🦤 Delta Oscar Delta Oscar is go" key="desc" />
        <meta property="og:description"
          content="🦤 Delta Oscar Delta Oscar is go" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Navbar menuItems={menuItems} />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
