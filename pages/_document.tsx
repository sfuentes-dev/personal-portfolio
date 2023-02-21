import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head></Head>
      <body className='dark:bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
