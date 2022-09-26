import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createWrapper } from 'next-redux-wrapper'

import BurgerMenu from '../src/components/Menu/BurgerMenu'
import store from '../src/redux/store'
import theme from '../src/assets/theme'
import translationEn from '../src/assets/translations/en'
import translationFr from '../src/assets/translations/fr'
import RootModal from '../src/containers/RootModal'

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
  render() {
    const { Component, appProps } = this.props

    return (
      <>
        <Provider store={store}>
          <Head>
            <title>Plastic Origins</title>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
            />
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
      </>
    )
  }
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
