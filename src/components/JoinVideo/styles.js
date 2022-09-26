import styled from "styled-components";

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
  width: 80%;
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`