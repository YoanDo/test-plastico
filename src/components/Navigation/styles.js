import styled from 'styled-components'

// Links
export const Links = styled.div`
  display: flex;
  padding-right: 16px;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: ${props => props.align};
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0;
  }
  span {
    font-size: ${props => props.theme.defaultFS};
    margin-right: 16px;
    cursor: pointer;
    color: ${props => props.theme.black};
    @media (max-width: 900px) {
      font-size: ${props => (props.burger ? props.theme.fourthFS : props.theme.defaultFS)};
      margin-bottom: ${props => (props.burger ? props.theme.fourthFS : 'inherit')};
      line-height: 1.6;
      margin-right: 0;
      font-family: ${props => (props.burger ? 'Bebas Neue' : 'inherit')};
    }
  }
`
