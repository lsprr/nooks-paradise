import '../styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Navigation } from '@/components/Navigation/Navigation';

/**
 * TODO: Need to move this array of menu items in a separate file.
*/
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Construction', href: '/construction' },
  { label: 'Creatures', href: '/creatures' },
  // { label: 'Items', href: '/items' },
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
        <meta property="og:title" content="Wilbur" />
        <meta name="description" content="This is your one-stop co-pilot for all things Animal Crossing: New Horizons! We got you covered on neighbors, island life, fashion, DIY, critters, K.K. Slider tunes, and special events. So buckle up, and let's fly through the fantastic world of ACNH together!" key="desc" />
        <meta property="og:description" content="This is your one-stop co-pilot for all things Animal Crossing: New Horizons! We got you covered on neighbors, island life, fashion, DIY, critters, K.K. Slider tunes, and special events. So buckle up, and let's fly through the fantastic world of ACNH together!" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navigation menuItems={menuItems} />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
