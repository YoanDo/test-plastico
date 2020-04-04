import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: ${props => props.theme.white};
    opacity: .15;
  }
  ::-moz-selection {
    background: ${props => props.theme.white};
  }
  *{
    line-height: 1.3;
  }
  body {
    background-color:${props => props.theme.white};
    color: ${props => props.black};
    font-weight: 300;
    font-size: ${props => props.theme.defaultFS};
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
    color: ${props => props.theme.black};
    margin: 0;
  }
  p {
    color: ${props => props.theme.black};
    font-size: ${props => props.theme.defaultFS};
    letter-spacing: 1.3px;
  }
`

export const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  padding: ${props => (props.menu ? 0 : `calc(${props.theme.mainTitleFS}*2) 0 0 0`)};
  @media (max-width: 900px) {
    padding: 0 20px;
    margin-top: ${props => (props.menu ? 0 : '20vh')};
  }
`

export default GlobalStyle
