import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const CardWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 25px;

  &:nth-child(1) {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }

  @media ${({ theme }) => theme.device.belowLaptop} {
    &:nth-child(1) {
      margin-left: auto;
    }
    &:last-of-type {
      margin-right: auto;
    }
  }
`;
