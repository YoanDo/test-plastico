import styled from 'styled-components';

export const CartWrapper = styled.div`
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  align-items: center;
  background: ${({ isNegative, theme }) =>
    isNegative ? theme.surfRiderBlue : 'none'};
  border-radius: 6px;
  border: solid white 1px;
  box-sizing: border-box;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: ${(props) => props.theme.spacing(1)} 0;
  padding: ${(props) => props.theme.spacing(2)};
  transition: all 0.2s ease-in-out;
  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
export const Title = styled.h2`
  color: ${({ isNegative, theme }) => (isNegative ? theme.white : 'inherit')};
  flex-basis: 23%;
  font-family: 'Bebas Neue';
  font-size: ${(props) => props.theme.thirdFS};
`;

export const Content = styled.span`
  font-size: ${(props) => props.theme.biggerFS};
  flex-basis: 45%;
  @media (max-width: 900px) {
    margin-bottom: ${(props) => props.theme.spacing(1)};
  }
`;
export const ButtonWrapper = styled.div`
  flex-basis: 20%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
