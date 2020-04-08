import styled from 'styled-components'

export const SurfRiderRibbon = styled.div`
  width: ${props => props.theme.ribbonWidth};
  font-family: 'Montserrat';
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  right: ${props => props.right};
  background: ${props => props.theme.surfRiderBlue};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  border-radius: 0 0 3px 3px;
  @media (max-width: 900px) {
    transform: scale(0.7);
  }
`

export const TopRibbon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: ${props => props.theme.menuHeight};
  margin: auto;
  span {
    color: white;
    text-align: center;
    font-size: ${props => props.theme.defaultFS};
  }
`

export const LogoWrapper = styled.div`
  width: 100%;
  max-width: 80px;
  margin: auto auto 5px auto;
  embed {
    width: 100%;
  }
`
