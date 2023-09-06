import styled from 'styled-components';

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1 1 0px;
  margin: ${({ theme }) => theme.spacing(2)};
  @media (max-width: 900px) {
    flex: 1;
    flex-direction: column;
    margin: auto;
  }
`;
export const Count = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.mainTitleFS};
  color: ${({ theme }) => theme.secondaryColor};
  font-family: ${({ theme }) => theme.secondaryFF};
  opacity: 0.85;
`;
export const Key = styled.span`
  color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.primaryFF};
  font-size: ${({ theme }) => theme.fourthFS};
  font-weight: regular;
  opacity: 0.85;
  text-align: center;
  text-transform: uppercase;
  white-space: pre-line;
  @media (max-width: 900px) {
    color: ${({ theme }) => theme.black};
  }
`;
