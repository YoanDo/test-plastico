import styled from 'styled-components'

// Links
export const Links = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  span {
    font-size: ${props => props.theme.defaultFS};
    margin-right: 16px;
    cursor: pointer;
    color: ${props => props.theme.black};
    @media (max-width: 900px) {
      font-size: ${props => props.theme.fourthFS};
      margin-bottom: ${props => props.theme.fourthFS};
      margin-right: 0;
      font-family: 'Bebas Neue';
    }
  }
`
