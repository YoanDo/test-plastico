import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: $white;
    opacity: .15;
  }
  ::-moz-selection {
    background: $white;
  }

  body {
    background-color:$white;
    color: $black;
    font-family: 'Montserrat', sans-serif;
  }

  ul {
    list-style: none;
    li {
      cursor: pointer;
    }
  }
`

export default GlobalStyle
