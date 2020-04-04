import styled from 'styled-components'

export const GoalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 200px;
  height: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`

export const Title = styled.h2`
  font-family: 'Bebas Neue';
  font-size: ${props => props.theme.thirdFS};
`
