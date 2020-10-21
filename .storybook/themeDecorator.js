import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/hoc/layout/styles'
import theme from '../src/assets/theme'

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat:300,400&display=swap" rel="stylesheet" />
    <GlobalStyle />
    <>{storyFn()}</>
  </ThemeProvider>
);

export default ThemeDecorator;
