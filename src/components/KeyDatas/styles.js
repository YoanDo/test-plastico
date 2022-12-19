import styled from 'styled-components';

export const KeysDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  align-items: flex-start;
  justify-content: space-around;
  margin: auto;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;
