import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin-bottom: 25px;
  @media (max-width: 900px) {
    margin-bottom: 0;
    margin-top: 25px;
  }
`

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: ${props => props.theme.spacing(1)};
  min-width: 300px;
  color: ${props => props.theme.black};
  p {
    font-size: ${props => props.theme.defaultFS};
    margin-top: 0;
    margin-bottom: ${props => props.theme.spacing(0.25)};
    margin-left: ${props => (props.row ? props.theme.spacing(1) : 'none')};
  }
  u {
    text-decoration: none;
    margin-top: ${props => props.theme.spacing(1)};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
export const Input = styled.input`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100%;
  min-width: 300px;
  color: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.black};
  font-size: ${props => props.theme.defaultFS};
  padding: 8px;
  border-radius: 3px;
  opacity: 0.8;
  box-shadow: none;
  transition: 0.8s;
  font-family: Montserrat;
  &:focus {
    color: ${props => props.theme.surfRiderBlue};
    border: 1px solid ${props => props.theme.surfRiderBlue};
    opacity: 1;
  }
`

export const ValidationInput = styled.button`
  cursor: pointer;
  width: 100%;
  min-width: 300px;
  font-size: ${props => props.theme.defaultFS};
  padding: 8px;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.surfRiderBlue};
  color: ${props => props.theme.white};
  background: ${props => props.theme.surfRiderBlue};
  box-shadow: none;
  transition: 0.6s;
  &:hover {
    color: ${props => props.theme.surfRiderBlue};
    background: ${props => props.theme.white};
  }
`
