import styled from 'styled-components'

import background from '../../assets/images/headerBg.jpg'

export const Banner = styled.div`
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: url(${background});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 900px) {
    height: 100%;
    background-image: none;
  }
`
export const Title = styled.h1`
  display: flex;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.mainTitleFS};
  letter-spacing: 1.93px;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const Claim = styled.h2`
  display: flex;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.secondaryFS};
  letter-spacing: 1.93px;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
export const MobileBanner = styled.div`
  @media (max-width: 900px) {
    align-items: center;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100%;
  }
`
