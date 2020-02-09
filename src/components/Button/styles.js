import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  background: ${props => props.theme.surfRiderBlue};
  border: none;
  border-radius: 3px;
  color: ${props => props.theme.white};
  height: 32px;
  text-transform: uppercase;
  cursor: pointer;
`
