import styled from 'styled-components'
import { Wrapper } from '../../hoc/layout/styles'

import sponsorImage from '../../assets/images/sponsors.png'

export const HeaderWrapper = styled(Wrapper)`
  padding-top: 170px;
  padding-bottom: 170px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 50vh;
  @media ${({ theme }) => theme.device.belowLaptop} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const HeaderIntroWrapper = styled.div`
  flex-basis: 50%;

  span {
    text-align: left;
    font-size: ${(props) => props.theme.fourthFS};
    position: relative;
    display: block;
  }

  @media ${({ theme }) => theme.device.belowLaptop} {
    flex-basis: auto;
  }
`

export const Sponsors = styled(Wrapper)`
  background: url(${sponsorImage});
  min-height: 500px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media ${({ theme }) => theme.device.belowLaptop} {
    min-height: 25vh;
    padding: 0;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.secondaryColor};
  font-size: ${(props) => props.theme.landingTitle};
  letter-spacing: 1.93px;
  text-transform: uppercase;
  top: 50%;
  z-index: 1;
  @media ${({ theme }) => theme.device.belowLaptop} {
    top: 50vh;
    font-size: ${(props) => props.theme.mainTitleFS};
    margin-bottom: ${(props) => props.theme.mainTitleFS};
  }
`
