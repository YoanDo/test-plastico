import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  background: ${(props) => (props.negative ? 'none' : props.theme.surfRiderBlue)};
  border: ${(props) => (props.negative ? `${props.theme.white}  solid 1px` : 'none')};
  border-radius: 3px;
  color: ${(props) => props.theme.white};
  height: 32px;
  text-transform: uppercase;
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  padding: 0 ${({ theme }) => theme.spacing(0.5)};
`
