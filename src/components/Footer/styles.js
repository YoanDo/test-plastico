import styled from 'styled-components'

export const FooterWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: ${props => props.theme.maxWidth};
  min-height: 20vh;
  padding: ${props => (props.menu ? 0 : `calc(${props.theme.mainTitleFS}*2) 0 0 0`)};
`

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Link = styled.a``

export const SurfRiderLogo = styled.svg`
  flex: none;
  fill: ${props => props.theme.surfRiderBlue};
  transition: fill 0.25s;
  height: 100px;
  width: auto;

  ${Link}:hover & {
    fill: ${props => props.theme.secondaryColor};
  }
`
