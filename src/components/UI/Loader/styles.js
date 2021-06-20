import styled from 'styled-components'
import loadingGif from '../../../assets/gifs/Rolling.gif'

export const LoaderGif = styled.div`
  background: ${`url(${loadingGif})`};
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-position: center;
  background-size: cover;
`
