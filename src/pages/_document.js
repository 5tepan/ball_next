import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta charSet="utf-8"/>
          <meta name="description" content="Ball" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100&display=swap" rel="stylesheet"/>
          <title>Ball</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
