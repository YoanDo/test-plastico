import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/hoc/layout/styles'
import theme from '../src/assets/theme'

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <>{storyFn()}</>
  </ThemeProvider>
);

export default ThemeDecorator;
