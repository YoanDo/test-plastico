import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  padding-top: 25vh;
  position: relative;
  width: 100%;
  width: 100%;
  @media ${({ theme }) => theme.device.belowLaptop} {
    padding-top: 0;
    margin: 0 ${({ theme }) => theme.spacing(1)};
    max-width: calc(100vw - ${({ theme }) => theme.spacing(2)});
  }
`;

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  @media ${({ theme }) => theme.device.belowLaptop} {
    margin-top: 20vh;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.secondaryColor};
  font-size: ${(props) => props.theme.landingTitle};
  letter-spacing: 1.93px;
  text-transform: uppercase;
  position: relative;
  background: url('https://images.pexels.com/photos/3316968/pexels-photo-3316968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  padding: 0;
  z-index: 1;
  width: max-content;
  font-size: 220px;
  margin-right: auto;
  @media ${({ theme }) => theme.device.belowLaptop} {
    font-size: ${({ theme }) => theme.mainTitleFS};
    position: inherit;
  }
`;

export const About = styled.div`
  align-items: center;
  color: ${(props) => props.theme.black};
  display: flex;
  font-family: ${({ theme }) => theme.primaryFF};
  font-weight: 300;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 45vw;
  background: white;
  padding-right: 16px;
  position: relative;
  z-index: 2;
  span {
    text-align: left;
    font-size: ${(props) => props.theme.fourthFS};
    position: relative;
    display: block;
  }
  @media ${({ theme }) => theme.device.belowLaptop} {
    height: auto;
    max-width: 100vw;
    padding: 0px;
    margin-top: ${({ theme }) => theme.mainTitleFS};
  }
`;
export const Illustration = styled.div`
  background: url('/images/dataTrash.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  height: 520px;
  width: 830px;
  position: absolute;
  bottom: 0px;
  right: -320px;
  z-index: 1;
  @media ${({ theme }) => theme.device.belowLaptop} {
    display: none;
  }
`;
