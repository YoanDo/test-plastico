import styled from 'styled-components';

export const SurfRiderRibbon = styled.div`
  align-items: flex-end;
  background: ${(props) => props.theme.surfRiderBlue};
  border-radius: 0 0 3px 3px;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  justify-content: center;
  left: ${(props) => props.left};
  min-height: 170px;
  position: absolute;
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  width: ${(props) => props.theme.ribbonWidth};
  font-size: ${(props) => props.theme.defaultFS};
  @media (max-width: 900px) {
    align-items: center;
    padding-bottom: 5px;
  }
`;

export const TopRibbon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: ${(props) => props.theme.menuHeight};
  margin: auto;
  span {
    color: white;
    text-align: center;
    font-size: ${(props) => props.theme.smallFS};
  }
`;

export const BotRibbon = styled.div`
  width: 100%;
  max-width: 76px;
  margin: auto auto 5px auto;
`;

export const Logo = styled.div`
  background: url('/images/surfrider_logo_white.png');
  min-height: 100px;
  min-width: 76px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 0px;
  content: '';
`;
