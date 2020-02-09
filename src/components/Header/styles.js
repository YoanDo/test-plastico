import styled from 'styled-components'

import background from '../../assets/images/headerBg.jpg'

export const Banner = styled.div`
  height: calc(80vh - 50px);
  background-position: center;
  background-size: cover;
  background-image: url(${background});
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Title = styled.span`
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: ${props => props.theme.mainTitleFS};
`
