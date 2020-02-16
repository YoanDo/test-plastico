import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'

import translationFr from '../src/assets/translations/fr'
import translationEn from '../src/assets/translations/en'
import theme from '../src/assets/theme'

const translations = {
  fr: translationFr,
  en: translationEn,
}

// const language = navigator.language.split(/[-_]/)[0] === 'fr' || 'en' //todo set detection
const language = 'en'

function MyApp({ Component, pageProps }) {
  return (
    <IntlProvider locale={language} messages={translations[language]}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  )
}

export default MyApp
