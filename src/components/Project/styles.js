import styled from 'styled-components'

import background from '../../assets/images/kayaks.jpg'

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 900px) {
    align-items: center;
  }
`

export const About = styled.h2`
  max-width: 50vw;
  font-weight: 300;
  font-family: 'Montserrat';
  font-size: ${props => props.theme.fourthFS};
  span {
    position: relative;
    &:after {
      z-index: -1;
      top: 6px;
      left: -5px;
      width: 104%;
      position: absolute;
      height: 20px;
      background-color: ${props => props.theme.secondaryColor};
      content: '';
      transform: rotate(1deg);
    }
  }
  @media (max-width: 900px) {
    max-width: 100%;
  }
`

export const AboutImage = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  margin-top: calc(${props => props.theme.mainTitleFS} / 2);
`
