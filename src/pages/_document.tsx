import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[#F5EADD] dark:bg-[#2F3939] dark:text-[#F5EADD] transition-all duration-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
