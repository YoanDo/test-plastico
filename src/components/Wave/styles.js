import styled from 'styled-components'

export const WaveWrapper = styled.div`
  padding: ${props => (props.menu ? 0 : `calc(${props.theme.mainTitleFS}*2) 0 0 0`)};
`

export const PlainBlue = styled.div`
  margin: -10px 0;
  width: 100%;
  background-color: ${props => props.theme.surfRiderBlue};
`

export const WaveContent = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  width: 100%;
  span,
  p,
  h1,
  h2,
  h3 {
    color: white;
  }
`
