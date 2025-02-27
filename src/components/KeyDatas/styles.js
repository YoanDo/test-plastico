import styled from 'styled-components';

export const KeysDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  align-items: flex-start;
  justify-content: space-around;
  margin: auto;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    div:nth-child(n + 2) {
      margin-top: ${({ theme }) => theme.spacing(2)};
    }
  }
`;
