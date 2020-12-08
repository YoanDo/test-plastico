import styled from 'styled-components'

const BreakerWrapper = styled.div`
  margin: 24px 0 40px;
  height: ${(props) => (props.bold ? '10' : '6')}px;
  width: 85px;
  background-color: ${(props) => (props.color ? props.color : props.theme.white)};
`

export default BreakerWrapper
