import styled from 'styled-components'

export const WaveWrapper = styled.div`
  padding: ${(props) => (props.menu ? 0 : `calc(${props.theme.mainTitleFS}*2) 0 0 0`)};
  width: 100vw;
  overflow: hidden;
`

export const WaveImgTop = styled.img`
  content: url('/svg/waveTop.svg');
  width: 100%;
  @media (max-width: 900px) {
    width: 101%;
  }
`

export const WaveImgBot = styled.img`
  content: url('/svg/waveBot.svg');
  width: 100%;
`

export const PlainBlue = styled.div`
  margin: -20px 0;
  width: 100%;
  background-color: ${(props) => props.theme.surfRiderBlue};
  border: ${(props) => props.theme.surfRiderBlue} 2px solid;
`

export const WaveContent = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${(props) => props.theme.maxWidth};
  margin: ${(props) => props.theme.spacing(2)} auto;
  width: 100%;
  span,
  p,
  h1,
  h2,
  h3 {
    color: white;
  }
`
