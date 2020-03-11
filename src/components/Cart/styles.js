import styled from 'styled-components'

export const CartWrapper = styled.div`
  color: ${props => props.theme.white};
  border: solid white 1px;
  border-radius: 6px;
  padding: ${props => `calc(${props.theme.mainTitleFS}/2)`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => (props.marginBottom ? `calc(${props.theme.mainTitleFS}/2)` : 0)};
`
export const Title = styled.h2`
  flex-basis: 23%;
  font-family: 'Bebas Neue';
  font-size: ${props => props.theme.thirdFS};
`

export const Content = styled.p`
  flex-basis: 45%;
`
export const ButtonWrapper = styled.div`
  flex-basis: 20%;
`
