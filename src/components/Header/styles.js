import styled from 'styled-components'

import background from '../../assets/images/headerBg.jpg'

export const Banner = styled.div`
  height: calc(100vh - 50px);
  background-position: center;
  background-size: cover;
  background-image: url(${background});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Title = styled.h1`
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: ${props => props.theme.mainTitleFS};
  letter-spacing: 1.93px;
`
