import styled from 'styled-components'

export const GoalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 15vw;
  min-width: 200px;
  height: 100%;
`

export const Title = styled.h2`
  font-family: 'Bebas Neue';
  font-size: ${props => props.theme.thirdFS};
`
