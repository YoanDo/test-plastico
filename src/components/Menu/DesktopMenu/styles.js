import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.white};
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  z-index: 99;
  opacity: ${({ disappearOnOffsetTop }) => (disappearOnOffsetTop ? 0 : 100)};
  transition: 1s;
`

export const MenuWrapper = styled.div`
  margin: auto;
  height: ${(props) => props.theme.menuHeight};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.theme.maxWidth};
  @media (max-width: 900px) {
    display: none;
  }
`

export const NavigationLinksWrapper = styled.div`
  margin-left: calc(${({ theme }) => theme.ribbonWidth} + 16px);
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  span {
    font-size: ${(props) => props.theme.defaultFS};
    margin-right: 16px;
    cursor: pointer;
    color: ${(props) => props.theme.black};
  }
`

export const SurfRiderRibbon = styled.div`
  width: ${(props) => props.theme.ribbonWidth};
  font-family: 'Montserrat';
  position: absolute;
  left: 0;
  top: 0;
  background: ${(props) => props.theme.surfRiderBlue};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  border-radius: 0 0 3px 3px;
`

export const TopRibbon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: ${(props) => props.theme.menuHeight};
  margin: auto;
  span {
    color: white;
    text-align: center;
    font-size: ${(props) => props.theme.defaultFS};
  }
`

export const LogoWrapper = styled.div`
  width: 85px;
  margin: auto auto 5px auto;
`

export const SocialWrapper = styled.div`
  margin-right: 16px;
`

export const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
