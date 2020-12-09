import styled from 'styled-components'

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1 1 0px;
  @media (max-width: 900px) {
    flex: 1;
    flex-direction: column;
  }
`
export const Count = styled.div`
  text-align: center;
  font-size: ${props => props.theme.mainTitleFS};
  color: ${props => props.theme.secondaryColor};
  font-family: 'Bebas Neue';
  opacity: 0.85;
`
export const Key = styled.span`
  color: ${props => props.theme.black};
  font-family: 'Montserrat';
  font-size: ${props => props.theme.fourthFS};
  font-weight: regular;
  opacity: 0.85;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 900px) {
    color: ${props => props.theme.black};
  }
`
