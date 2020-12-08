import styled from 'styled-components'

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: ${(props) => props.theme.maxWidth};
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0 ${(props) => props.theme.spacing(1)};
  }
`
