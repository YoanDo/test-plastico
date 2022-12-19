import styled from 'styled-components';

export const FooterWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  max-width: ${(props) => props.theme.maxWidth};
  min-height: 20vh;
  padding: ${(props) => `${props.theme.spacing(3)} ${props.theme.spacing(1)} `};
  @media (max-width: 900px) {
  }
`;

export const SocialWrapper = styled.div`
  max-width: 120px;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 0;

    color: ${(props) => props.theme.black};
  }
`;

export const Link = styled.a`
  margin: 0;
  max-width: 70px;
`;

export const SurfRiderLogo = styled.svg`
  flex: none;
  fill: ${(props) => props.theme.surfRiderBlue};
  transition: fill 0.25s;
  height: 100px;
  width: auto;
`;
