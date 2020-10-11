import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'
import Head from 'next/head'

import translationFr from '../src/assets/translations/fr'
import translationEn from '../src/assets/translations/en'
import theme from '../src/assets/theme'
import BurgerMenu from '../src/components/Menu/BurgerMenu'

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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Plastic Origins</title>
      </Head>
      <IntlProvider locale={language} messages={translations[language]}>
        <ThemeProvider theme={theme}>
          <BurgerMenu pageWrapId="page-wrap" />
          <main id="page-wrap">
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </IntlProvider>
    </>
  )
}

export default MyApp
