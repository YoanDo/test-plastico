import styled from 'styled-components'

export const VideoWrapper = styled.div`
  height: 60vh;
  width: 62vw;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
`
