import styled from 'styled-components'
import { Wrapper } from '../../hoc/layout/styles'

export const HeaderWrapper = styled(Wrapper)`
  padding-top: 170px;
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

export const PageTitle = styled.h1`
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
export const SponsorsWrapper = styled.div`
  display: flex;
  flex-direction: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: ${({ theme }) => theme.secondaryFS};
  span {
    margin-right: ${({ theme }) => theme.secondaryFS};
  }
  @media ${({ theme }) => theme.device.belowLaptop} {
    flex-direction: column;
    span {
      margin-bottom: ${({ theme }) => theme.secondaryFS};
      margin-top: calc(${({ theme }) => theme.secondaryFS}*2);
      margin-right: 0;
    }
  }
`
export const SponsorRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media ${({ theme }) => theme.device.belowLaptop} {
    flex-direction: column;
  }
`

export const SponsorLogo = styled.div`
  background: url(${({ url }) => url});
  flex-grow: 1;
  flex-basis: 0;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 200px;
  max-width: 200px;
  @media ${({ theme }) => theme.device.belowLaptop} {
    min-height: 200px;
    min-width: 200px;
  }
`
