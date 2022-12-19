import styled from 'styled-components';

export const SolutionsWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  @media ${({ theme }) => theme.device.belowLaptop} {
    flex-direction: column;
  }
`;

export const ListWrapper = styled.ul`
  margin: 0;
  flex-basis: 200px;
  height: 100%;
  padding: 0;
  max-height: 80vh;
  overflow: scroll;
  position: relative;
  padding-left: 6px;
  @media ${({ theme }) => theme.device.belowLaptop} {
    flex-basis: 100%;
    margin-bottom: 10vh;
  }
`;
export const ListSelectBar = styled.div`
  height: ${({ height }) => height}px;
  width: 4px;
  position: absolute;
  background: ${({ theme }) => theme.secondaryColor};
  top: ${({ offsetTop }) => offsetTop || 0}px;
  left: 4px;
  content: '';
  transition: 0.4s;
  transition-timing-function: ease-out;
`;

export const ListTitle = styled.li`
  color: ${({ theme }) => theme.surfRiderBlue};
  font-size: ${({ theme }) => theme.biggerFS};
  padding: calc(${({ theme }) => theme.biggerFS} / 2) 0;
  cursor: pointer;
  font-family: ${({ theme }) => theme.defaultFF};
  opacity: ${({ isSelected }) => (isSelected ? '1' : '.7')};
  padding-left: ${({ isSelected }) => (isSelected ? '4px' : '0')};
  transition: 0.4s;
  &:hover {
    opacity: 1;
  }
  @media ${({ theme }) => theme.device.belowLaptop} {
    font-size: ${({ theme }) => theme.fourthFS};
  }
`;

export const SolutionCardWrapper = styled.div`
  flex-basis: 100%;
  height: 100%;
  overflow: scroll;
`;
