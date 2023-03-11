import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default function MyDocument(props) {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat:300,400&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        {props.styleTags}
      </Head>
      <body>
        <script>0</script>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src=https://www.googletagmanager.com/ns.html?id=GTM-TGNRLHV" height="0" width="0" style="display: none; visibility: hidden;" />`
          }}
        />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
      styleTags: sheet.getStyleElement()
    };
  } finally {
    sheet.seal();
  }
};
