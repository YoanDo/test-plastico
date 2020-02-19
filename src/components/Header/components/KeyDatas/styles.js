import styled from 'styled-components'

export const Datas = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  align-items: center;
  justify-content: space-around;
`
export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17vw;
`
export const Count = styled.span`
  text-align: center;
  font-size: ${props => props.theme.mainTitleFS};
  color: ${props => props.theme.secondaryColor};
  font-family: 'Bebas Neue';
  opacity: 0.85;
`
export const Key = styled.span`
  font-size: ${props => props.theme.fourthFS};
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-family: 'Montserrat';
  font-weight: regular;
  opacity: 0.85;
`
