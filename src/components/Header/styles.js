import styled from 'styled-components'

import background from '../../assets/images/headerBg.jpg'

export const Banner = styled.div`
  align-items: center;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  @media (max-width: 900px) {
    height: 100%;
    background-image: none;
  }
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
