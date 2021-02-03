import styled from 'styled-components'
import BgTrash from '../../assets/images/dataTrash.png'

export const Wrapper = styled.div`
  opacity: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media ${({ theme }) => theme.device.belowLaptop} {
    height: auto;
  }
`

export const LeftImage = styled.div`
  background-image: url(${BgTrash});
  background-position: center;
  background-size: cover;
  height: 100vh;
  left: 0;
  position: absolute;
  width: 50vw;
  z-index: 0;
  @media ${({ theme }) => theme.device.belowLaptop} {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.secondaryColor};
  font-size: ${(props) => props.theme.landingTitle};
  letter-spacing: 1.93px;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  @media ${({ theme }) => theme.device.belowLaptop} {
    top: 50vh;
  }
`

export const LimeLine = styled.div`
  width: 40vw;
  position: absolute;
  background-color: ${(props) => props.theme.secondaryColor};
  height: 3px;
  right: 0;
`

export const About = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  max-width: 30vw;
  font-weight: 300;
  font-family: ${({ theme }) => theme.primaryFF};
  color: ${(props) => props.theme.black};
  margin-top: auto;
  span {
    text-align: left;
    font-size: ${(props) => props.theme.fourthFS};
    position: relative;
    display: block;
  }
  @media ${({ theme }) => theme.device.belowLaptop} {
    height: auto;
    max-width: 100vw;
    padding: 0 20px;
    margin-top: ${({ theme }) => theme.mainTitleFS};
  }
`
export const RightSide = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: auto;
  width: 50vw;
  flex-direction: column;
  position: relative;
  @media ${({ theme }) => theme.device.belowLaptop} {
    align-items: flex-start;
    height: 100%;
    width: 100vw;
  }
`

export const Count = styled.div`
  color: ${(props) => props.theme.secondaryColor};
  font-size: ${({ theme }) => theme.fourthFS};
  position: absolute;
  top: 100px;
  right: 100px;
  font-style: italic;
  @media ${({ theme }) => theme.device.belowLaptop} {
    top: -90vh;
    right: 20px;
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0px;
  transform: translateY(-50%);
  cursor: pointer;
  @media ${({ theme }) => theme.device.belowLaptop} {
    display: none;
  }
`
