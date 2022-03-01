import styled from 'styled-components'

export const LoaderGif = styled.div`
  background: url('/gifs/Rolling.gif');
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-position: center;
  background-size: cover;
`
