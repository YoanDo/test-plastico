import styled from 'styled-components';

export const GoalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 200px;
  height: 100%;
  span {
    font-size: ${(props) => props.theme.biggerFS};
    color: ${(props) => props.theme.black};
  }
  @media (min-width: 900px) {
    flex-basis: 25%;
  }
  @media (max-width: 900px) {
    margin-bottom: ${(props) => props.theme.spacing(1)};
    flex-direction: column;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-family: 'Bebas Neue';
  font-size: ${(props) => props.theme.thirdFS};
`;
