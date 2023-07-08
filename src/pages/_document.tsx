import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>developerdiscovery</title>
        <meta
          name="description"
          content={
            "개발자들의 유용한 정보를 공유하자!"
          }
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="developerdiscovery" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://developerdiscovery.com" />
        <meta property="og:image" content="" />
        <meta property="og:article:author" content="rha6780" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
