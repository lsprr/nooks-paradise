import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-lightBg dark:bg-darkBg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
