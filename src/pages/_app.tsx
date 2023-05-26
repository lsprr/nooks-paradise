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
  // { label: 'Home', href: '/' },
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
        <title>Nook&apos;s Paradise</title>
        <meta name="description" content="Discover Nook's Paradise, your ultimate co-pilot for everything related to Animal Crossing: New Horizons! Explore categories like neighbors, island life, fashion, DIY, critters, K.K. Slider tunes, and special events. Join us in this journey through the charming world of ACNH." />

        <meta property="og:url" content="https://nooks-paradise.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nook's Paradise" />
        <meta property="og:description" content="Discover Nook's Paradise, your ultimate co-pilot for everything related to Animal Crossing: New Horizons! Explore categories like neighbors, island life, fashion, DIY, critters, K.K. Slider tunes, and special events. Join us in this journey through the charming world of ACNH." />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="nooks-paradise.vercel.app" />
        <meta property="twitter:url" content="https://nooks-paradise.vercel.app" />
        <meta name="twitter:title" content="Nook's Paradise" />
        <meta name="twitter:description" content="Discover Nook's Paradise, your ultimate co-pilot for everything related to Animal Crossing: New Horizons! Explore categories like neighbors, island life, fashion, DIY, critters, K.K. Slider tunes, and special events. Join us in this journey through the charming world of ACNH." />
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
