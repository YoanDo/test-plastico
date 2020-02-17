import styled from 'styled-components'

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10vh; //todo remove
  flex-direction: column;
`

export const TextTitle = styled.h1`
  font-family: 'Bebas Neue';
  font-size: ${props => props.theme.mainTitleFS};
  letter-spacing: 2.28px;
  line-height: 90px;
  margin-bottom: 0;
  color: ${props => props.theme.black};
`
