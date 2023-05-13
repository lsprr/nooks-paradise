import '../styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SearchProvider } from '@contexts/SearchProvider';
import { Navigation } from '@/components/Navigation';
import { usePageLoading } from '@/hooks/usePageLoading';
import { Loading } from '@/components/Loading';

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
  const { isPageLoading } = usePageLoading();

  return (
    <>
      <Head>
        <title>Wilbur</title>
        <meta name="description" content="This is your one-stop co-pilot for all things Animal Crossing: New Horizons! We got you covered on neighbors, island life, fashion, DIY, critters, K.K. Slider tunes, and special events. So buckle up, and let's fly through the fantastic world of ACNH together!" />

        <meta property="og:url" content="https://wilbur.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wilbur" />
        <meta property="og:description" content="This is your one-stop co-pilot for all things Animal Crossing: New Horizons! We got you covered on neighbors, island life, fashion, DIY, critters, K.K. Slider tunes, and special events. So buckle up, and let's fly through the fantastic world of ACNH together!" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wilbur.vercel.app" />
        <meta property="twitter:url" content="https://wilbur.vercel.app" />
        <meta name="twitter:title" content="Wilbur" />
        <meta name="twitter:description" content="This is your one-stop co-pilot for all things Animal Crossing: New Horizons! We got you covered on neighbors, island life, fashion, DIY, critters, K.K. Slider tunes, and special events. So buckle up, and let's fly through the fantastic world of ACNH together!" />
        <meta name="twitter:image" content="" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <SearchProvider>
        <Navigation menuItems={menuItems} />
        <main>
          <>
            {isPageLoading ? (
              <Loading />
            ) : (
              <Component {...pageProps} />
            )}
          </>
        </main>
      </SearchProvider>
    </>
  )
}

export default MyApp
