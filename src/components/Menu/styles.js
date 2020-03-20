import styled from 'styled-components'

const ribbonWidth = '100px'
const menuHeight = '50px'

export const MenuWrapper = styled.div`
  margin: auto;
  height: ${menuHeight};
  position: relative;
  display: flex;
  padding-left: calc(${ribbonWidth} + 16px * 2);
  justify-content: space-between;
  align-items: center;
  max-width: ${props => props.theme.maxWidth};
`
export const Links = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  span {
    font-size: ${props => props.theme.defaultFS};
    margin-right: 16px;
    cursor: pointer;
    color: ${props => props.theme.black};
  }
`

export const SurfRiderRibbon = styled.div`
  width: ${ribbonWidth};
  font-family: 'Montserrat';
  position: absolute;
  left: 0;
  top: 0;
  background: ${props => props.theme.surfRiderBlue};
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
  height: ${menuHeight};
  margin: auto;
  span {
    color: white;
    text-align: center;
    font-size: ${props => props.theme.defaultFS};
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
