import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: ${props => props.theme.white};
    opacity: .15;
  }
  ::-moz-selection {
    background: ${props => props.theme.white};
  }

  body {
    background-color:${props => props.theme.white};
    color: ${props => props.black};
    font-family: 'Montserrat', sans-serif;
    margin: 0 auto;
    font-size: 62.5%;
  }

  ul {
    list-style: none;
    li {
      cursor: pointer;
    }
  }
  h1,h2,h3,h4{
    font-family: 'Bebas Neue';
  }
  span{
    color: ${props => props.theme.black}
  }
`

export const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
`

export default GlobalStyle
