import styled from 'styled-components'

export const GoalsWrapper = styled.div`
  margin-top: ${(props) => props.theme.mainTitleFS};
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`
