import styled from 'styled-components';

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
`;
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
      background-color: ${(props) => props.theme.secondaryColor};
      content: '';
      height: 20px;
      left: -5px;
      position: absolute;
      top: 6px;
      transform: rotate(1deg);
      width: 104%;
      z-index: -1;
    }
    &:hover:last-of-type:after {
      background: lime;
    }
  }
  span:hover {
    &:last-of-type:after {
      background: lime;
    }
  }
`;
