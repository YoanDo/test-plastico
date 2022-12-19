import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const About = styled.div`
  max-width: 50vw;
  font-weight: 300;
  font-family: 'Montserrat';
  color: ${(props) => props.theme.black};
  span {
    font-size: ${(props) => props.theme.fourthFS};
    position: relative;
    &:first-of-type:after {
      z-index: -1;
      top: 6px;
      left: -5px;
      width: 104%;
      position: absolute;
      height: 20px;
      background-color: ${(props) => props.theme.secondaryColor};
      content: '';
      transform: rotate(1deg);
    }
  }
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const AboutImage = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url('/images/kayaks.jpg');
  background-position: center;
  background-size: cover;
  margin-top: ${(props) => props.theme.spacing(2)};
`;
