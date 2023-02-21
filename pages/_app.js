import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { createWrapper } from 'next-redux-wrapper';

import BurgerMenu from '../src/components/Menu/BurgerMenu';
import store from '../src/redux/store';
import theme from '../src/assets/theme';
import translationEn from '../src/assets/translations/en';
import translationFr from '../src/assets/translations/fr';
import RootModal from '../src/containers/RootModal';

const translations = {
  fr: translationFr,
  en: translationEn
};

let language = 'fr';

if (
  typeof window !== 'undefined' &&
  typeof window.navigator !== 'undefined' &&
  navigator.language &&
  navigator.language.split(/[-_]/)[0] !== 'fr'
) {
  language = 'en';
}

class MyApp extends App {
  render() {
    const { Component, appProps } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TGNRLHV');`
            }}
          />
          <title>Plastic Origins</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
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
        </Head>
        <IntlProvider locale={language} messages={translations[language]}>
          <ThemeProvider theme={theme}>
            <BurgerMenu pageWrapId="page-wrap" />
            <main id="page-wrap">
              <RootModal />
              <Component {...appProps} />
            </main>
          </ThemeProvider>
        </IntlProvider>
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
