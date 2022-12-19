import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  span {
    font-size: ${({ theme }) => theme.biggerFS};
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const VideoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 0;
  justify-content: center;
  margin: auto;
  max-width: ${(props) => props.theme.maxWidth};
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
export const LeftSide = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  @media screen and (max-width: 992px) {
    flex-basis: 100%;
  }
`;

export const RightSide = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;
  margin: auto 0;
  padding: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  span {
    width: 80%;
    display: inline-block;
  }
  @media screen and (max-width: 992px) {
    flex-basis: 100%;
    display: content;
    span {
      width: 100%;
      margin-top: ${({ theme }) => theme.spacing(2)};
    }
  }
`;
