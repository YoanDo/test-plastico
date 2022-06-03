import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: ${(props) => props.theme.white};
    opacity: .15;
  }
  ::-moz-selection {
    background: ${(props) => props.theme.white};
  }

  *{
    line-height: 1.3;
  }

  a, a:hover, a:active, a:focus{
    text-decoration: none;
    outline: 0;
  }

  body {
    background-color:${(props) => props.theme.white};
    color: ${(props) => props.black};
    font-weight: 300;
    font-size: ${(props) => props.theme.defaultFS};
    font-family: 'Montserrat', sans-serif;
    margin: 0 auto;
    font-size: 62.5%;
    max-width: 100vw;
    overflow-x: hidden;
    white-space: pre-line;
    /* TO FIX FOUC */
    opacity: 1 !important;
  }

  ul {
    list-style: none;
    li {
      cursor: pointer;
    }
  }
  h1,h2,h3,h4{
    font-family: 'Bebas Neue';
    color: ${(props) => props.theme.black};
    margin: 0;
  }
  p,label, button {
    font-size: ${(props) => props.theme.defaultFS};
    line-height: 1.3;
  }

  input:focus, textarea:focus, select:focus{
    outline: none;
  }
  
  input::-moz-focus-inner { 
    border: 0; 
  }

  ::selection {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`

export const Wrapper = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: auto;
  padding: ${(props) => (props.menu ? 0 : `${props.theme.spacing(6)} 0 0 0`)};
  @media (max-width: 1280px) {
    padding: 0 ${(props) => props.theme.spacing(1)};
    margin-top: ${(props) => (props.menu ? 0 : '20vh')};
  }
`

export const PreventAnimationFlashWrapper = styled.div`
  opacity: 0;
`

export default GlobalStyle
