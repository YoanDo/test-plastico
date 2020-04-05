import styled from 'styled-components'

export const CartWrapper = styled.div`
  align-items: center;
  border-radius: 6px;
  border: solid white 1px;
  color: ${props => props.theme.white};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => (props.marginBottom ? `calc(${props.theme.mainTitleFS}/2)` : 0)};
  padding: ${props => `calc(${props.theme.mainTitleFS}/2)`};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.007);
  }
  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    max-width: 70vw;
    width: 100%;
  }
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
  @media (max-width: 900px) {
    width: 100%;
  }
`
