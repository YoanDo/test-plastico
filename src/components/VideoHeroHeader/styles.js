import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 1280px) {
    margin-top: -50px;
  }
`;

export const VideoContainer = styled.article`
  display: block;
  /* float: left; */
  opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
  position: relative;
  transition: 0.8s;
  /* *  padding-bottom: 46.25%; 16:9 * */
  width: 100%;
  iframe {
    display: block;
    position: absolute;
    width: 105%;
    height: 130%;
  }
`;
