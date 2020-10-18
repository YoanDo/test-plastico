import Document, { Head, Main, NextScript } from 'next/document'
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }
  
  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat:300,400&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="canonical" href="www.plastic-origins.eu" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="A citizen science project that uses AI to map river plastic pollution – powered by Surfrider Foundation Europe" />
          <meta property="og:title" content="Plastic Origins" key="title" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
