import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/hoc/layout/styles'
import theme from '../src/assets/theme'
import { IntlProvider } from 'react-intl'
import translationEn from '../src/assets/translations/en.json'

const translations = {
  en: translationEn,
}

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <IntlProvider locale={'en'} messages={translations.en}>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat:300,400&display=swap" rel="stylesheet" />
    <GlobalStyle />
    <>{storyFn()}</>
    </IntlProvider>
  </ThemeProvider>
);

export default ThemeDecorator;
