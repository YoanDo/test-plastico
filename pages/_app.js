import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import withRedux from 'next-redux-wrapper'

import BurgerMenu from '../src/components/Menu/BurgerMenu'
import store from '../src/redux/store'
import theme from '../src/assets/theme'
import translationEn from '../src/assets/translations/en'
import translationFr from '../src/assets/translations/fr'

const translations = {
  fr: translationFr,
  en: translationEn,
}

let language = 'fr'

if (
  typeof window !== 'undefined' &&
  typeof window.navigator !== 'undefined' &&
  navigator.language &&
  navigator.language.split(/[-_]/)[0] !== 'fr'
) {
  language = 'en'
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // load app props if their is any or return an empty one
    const appProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    console.log(appProps)
    return { appProps: appProps }
  }
  render() {
    const { Component, appProps } = this.props

    return (
      <>
        <Provider store={store}>
          <Head>
            <title>Plastic Origins</title>
          </Head>
          <IntlProvider locale={language} messages={translations[language]}>
            <ThemeProvider theme={theme}>
              <BurgerMenu pageWrapId="page-wrap" />
              <main id="page-wrap">
                <Component {...appProps} />
              </main>
            </ThemeProvider>
          </IntlProvider>
        </Provider>
      </>
    )
  }
}

const makeStore = () => store

export default withRedux(makeStore)(MyApp)
