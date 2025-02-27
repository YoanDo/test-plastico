import styled from 'styled-components';

// import background from '/images/headerbg_1900x1200.jpg'

export const Banner = styled.div`
  align-items: center;
  background-image: url('/images/headerbg_1900x1200.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  opacity: 0;
  @media (max-width: 900px) {
    height: 100%;
    background-image: none;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  opacity: 0;
`;
export const TagLine = styled.span`
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.primaryFF};
  font-size: ${({ theme }) => theme.fourthFS};
  margin-top: ${({ theme }) => theme.fourthFS};
  text-align: center;
  text-transform: uppercase;
`;

export const MobileBanner = styled.div`
  @media (max-width: 900px) {
    align-items: center;
    background-image: url('/images/headerbg_1900x1200.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100%;
  }
`;
