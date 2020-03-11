import styled from 'styled-components'

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: ${props => props.theme.maxWidth};
  align-items: center;
`
