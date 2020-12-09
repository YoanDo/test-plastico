import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`

export const TitlePrimary = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.landingTitle};
  letter-spacing: 1.93px;
  line-height: 1;
  position: relative;
  text-transform: uppercase;
  z-index: 1;
  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.mainTitleFS};
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const TitleSecondary = styled(TitlePrimary)`
  color: ${(props) => props.theme.secondaryColor};
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 53%;
  transform: translate(-49%, -50%);
  white-space: nowrap;
  z-index: 0;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
