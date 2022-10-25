import styled from 'styled-components'

export const Schema = styled.div`
  width: 100%;
  height: 100%;
  min-height: 75vh;
  background: url('/images/polutionsSchemaFr.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media ${({ theme }) => theme.device.belowLaptop} {
    min-height: 34vh;
  }
`
export const GetInTouchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.secondaryFF};
  font-size: ${({ theme }) => theme.fourthFS};
  padding-bottom: 124px;
  a {
    color: inherit;
  }
  span {
    position: relative;
    &:last-of-type {
      margin-left: ${({ theme }) => theme.spacing(0.25)};
    }
    &:last-of-type:after {
      z-index: -1;
      top: 6px;
      left: -5px;
      width: 104%;
      position: absolute;
      height: 20px;
      background-color: ${(props) => props.theme.secondaryColor};
      content: '';
      transform: rotate(1deg);
    }
  }
`
