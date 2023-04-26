import '../styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Navigation } from '@components/Navigation';

/**
 * TODO: Need to move this array of menu items in a separate file.
*/
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Construction', href: '/construction' },
  { label: 'Creatures', href: '/creatures' },
  { label: 'Items', href: '/items' },
  { label: 'NPCs', href: '/npcs' },
  { label: 'Reactions', href: '/reactions' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Seasons And Events', href: '/seasons-and-events' },
  { label: 'Villagers', href: '/villagers' },
];

/**
 * TODO: Add error boundaries.  
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wilbur</title>
        <meta property="og:title" content="Sea Bass" />
        <meta name="description" content="🦤 Delta Oscar Delta Oscar is go" key="desc" />
        <meta property="og:description"
          content="🦤 Delta Oscar Delta Oscar is go" />
      </Head>
      <Navigation menuItems={menuItems} />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
