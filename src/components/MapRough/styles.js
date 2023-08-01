import styled from 'styled-components';

export const MapWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  width: fit-content;
  .map-container {
    height: 60vh;

    @media (max-width: 900px) {
      width: calc(100vw - ${({ theme }) => theme.spacing(2)});
    }
  }
  .sideBar {
    position: absolute;
    width: fit-content;
  }
`;
