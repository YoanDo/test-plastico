import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat:300,400&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="canonical" href="www.plastic-origins.eu" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="A citizen science project that uses AI to map river plastic pollution – powered by Surfrider Foundation Europe"
          />
          <meta property="og:title" content="Plastic Origins" key="title" />
          <meta name="google-play-app" content="com.plasticorigins" />
          <meta name="apple-itunes-app" content="app-id=1532710998" />
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        {/* TO FIX NEXTJS FOUC IN PROD */}
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
